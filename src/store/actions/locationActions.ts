import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import { Coords, SET_COORDS, SET_LOCATION } from '../types'
import { RootState } from '../store'
import { currentWeather } from '@/api/forecast'
import reverseGeocoding from '@/api/reverseGeocoding'

/**
 * Set current weather
 * @description Sets current weather information into state
 * @param coords Latitude and Longitude
 * @returns {(dispatch: ThunkDispatch<RootState, void, Action>) => Promise<void>}
 */
export function setCurrentWeather(
	coords: Coords
): (dispatch: ThunkDispatch<RootState, void, Action>) => Promise<void> {
	return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
		try {
			const response = await currentWeather({
				lat: coords.lat,
				lon: coords.lon,
			})

			if (response) {
				const lat = response.lat
				const lon = response.lon

				dispatch({
					payload: {
						lat,
						lon,
					},
					type: SET_COORDS,
				})

				const reverseResponse = await reverseGeocoding({ lat, lon })

				if (reverseResponse) {
					dispatch({ payload: reverseResponse.city, type: SET_LOCATION })
				}
			}
		} catch (error) {
			console.log(error)
		}
	}
}
