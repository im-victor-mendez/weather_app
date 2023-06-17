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

/* Forecast */

// Types
export const SET_FORECAST = 'SET_FORECAST'

// State
export interface ForecastState {
	forecasts: Array<Forecast>
}

// Types
export type Forecast = {
	day: string
	weather: string
	icon: number
	summary: string
	predictability: number
	temperature: number
	temperature_min: number
	temperature_max: number
	feels_like: number
	feels_like_min: number
	feels_like_max: number
	wind_chill: number
	wind_chill_min: number
	wind_chill_max: number
	dew_point: number
	dew_point_min: number
	dew_point_max: number
	wind: {
		speed: number
		gusts: number
		dir: string
		angle: number
	}
	cloud_cover: number
	pressure: number
	precipitation: {
		total: number
		type: string
	}
	probability: {
		precipitation: number
		storm: number
		freeze: number
	}
	ozone: number
	humidity: number
	visibility: number
}

//Actions
export interface SetForecast {
	payload: Array<Forecast>
	type: typeof SET_FORECAST
}

export type ForecastAction = SetForecast
