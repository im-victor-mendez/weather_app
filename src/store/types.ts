/* Location */

// Sets
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

// Sets
export const SET_FORECAST = 'SET_FORECAST'
export const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER'

// State
export interface ForecastState {
	currentWeather: CurrentWeather
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

export type CurrentWeather = {
	icon: string
	icon_num: number
	summary: string
	temperature: number
	feels_like: number
	wind_chill: number
	dew_point: number
	wind: {
		speed: number
		gusts: number
		angle: number
		dir: string
	}
	precipitation: {
		total: number
		type: string
	}
	cloud_cover: number
	ozone: number
	pressure: number
	uv_index: number
	humidity: number
	visibility: number
}

//Actions
export interface SetForecast {
	payload: Array<Forecast>
	type: typeof SET_FORECAST
}

export interface SetCurrentWeather {
	payload: CurrentWeather
	type: typeof SET_CURRENT_WEATHER
}

export type ForecastAction = SetForecast | SetCurrentWeather
