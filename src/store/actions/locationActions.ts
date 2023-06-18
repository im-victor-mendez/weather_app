import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import { Coords, SET_COORDS, SET_LOCATION } from '../types'
import { RootState } from '../store'

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
