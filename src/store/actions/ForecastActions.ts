import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import { Coords, Forecast, SET_FORECAST } from '../types'
import { RootState } from '../store'
import { dailyWeather } from '@/api/forecast'

/**
 * Set location forecast
 * @description Sets forecast data into state
 * @param coords Latitude and Longitude
 * @example setLocationForecast({ lat: 12, lon: 12 })
 */
export function setLocationForecast(coords: Coords) {
	return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
		const lat = coords.lat
		const lon = coords.lon

		try {
			const response = await dailyWeather({ lat, lon })

			if (response) {
				dispatch(setForecast(response.daily.data.slice(2, 7)))
			}
		} catch (error) {
			console.log(error)
		}
	}
}

export function setForecast(data: Array<Forecast>) {
	return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
		dispatch({ payload: data, type: SET_FORECAST })
	}
}
