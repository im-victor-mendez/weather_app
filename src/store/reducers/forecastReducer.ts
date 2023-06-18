import {
	CurrentWeather,
	Forecast,
	ForecastAction,
	ForecastState,
	SET_CURRENT_WEATHER,
	SET_FORECAST,
} from '../types'

const initialState: ForecastState = {
	currentWeather: {} as CurrentWeather,
	forecasts: [] as Array<Forecast>,
}

function forecastReducer(state = initialState, action: ForecastAction) {
	switch (action.type) {
		case SET_FORECAST:
			return {
				...state,
				forecasts: action.payload,
			}

		case SET_CURRENT_WEATHER:
			return {
				...state,
				currentWeather: action.payload,
			}
		default:
			return state
	}
}
export default forecastReducer
