import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import { Coords, Forecast, SET_CURRENT_WEATHER, SET_FORECAST } from '../types'
import { RootState } from '../store'
import { currentWeather } from '@/api/forecast'

/**
 * Set forecast
 * @description Set forecast state with forecasts array.
 * @param data Array of Forecasts
 * @example dispatch(setForecast([...]))
 */
export function setForecast(data: Array<Forecast>) {
	return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
		dispatch({ payload: data, type: SET_FORECAST })
	}
}

/**
 * Set current weather
 * @description Set current weather state.
 * @param coords Latitude and Longitude as `Coords` type
 */
export function setCurrentWeather(coords: Coords) {
	return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
		try {
			const response = await currentWeather({
				lat: coords.lat,
				lon: coords.lon,
			})
			dispatch({ payload: response.current, type: SET_CURRENT_WEATHER })
		} catch (error) {
			console.log(error)
		}
	}
}
