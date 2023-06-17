import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import { Coords, SET_COORDS, SET_CURRENT_WEATHER, SET_LOCATION } from '../types'
import { RootState } from '../store'
import { currentWeather } from '@/api/forecast'
import reverseGeocoding from '@/api/reverseGeocoding'

/**
 * Set current weather
 * @description Sets current weather information into state
 * @param coords Latitude and Longitude
 */
export function setCurrentWeather(coords: Coords) {
	return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
		try {
			const response = await currentWeather({
				lat: coords.lat,
				lon: coords.lon,
			})

			if (response) {
				const lat = response.lat
				const lon = response.lon

				setCoords(coords)
				dispatch({ payload: response.current, type: SET_CURRENT_WEATHER })

				const reverseResponse = await reverseGeocoding({ lat, lon })

				if (reverseResponse) {
					dispatch(setLocation(reverseResponse.city))
				}
			}
		} catch (error) {
			console.log(error)
		}
	}
}

/**
 * Set coords
 * @description Dispatches Set Coords
 * @param coords Latitude and Longitude
 * @example setCoords({ lat: 12, lon: 12 })
 */
export function setCoords(coords: Coords) {
	return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
		const payload = {
			lat: coords.lat,
			lon: coords.lon,
		}
		dispatch({
			payload,
			type: SET_COORDS,
		})
	}
}

/**
 * Set location
 * @description Dispatches Set Location
 * @param location Location name
 * @example setLocation('Mexico City')
 */
export function setLocation(location: string) {
	return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
		dispatch({ payload: location, type: SET_LOCATION })
	}
}
