/* Location */

// Types
export const SET_LAT = 'SET_LAT'
export const SET_LON = 'SET_LON'
export const SET_COORDS = 'SET_COORDS'

export const SET_LOCATION = 'SET_LOCATION'

// State
export interface LocationState {
	lat: number | undefined
	location: string | undefined
	lon: number | undefined
}

// Types
export type Coords = {
	lat: number
	lon: number
}

// Actions
export interface SetCoords {
	payload: Coords
	type: typeof SET_COORDS
}

export interface SetLocation {
	payload: string
	type: typeof SET_LOCATION
}

export type LocationAction = SetCoords | SetLocation
