import { ForecastAction, ForecastState, SET_FORECAST } from '../types'

const initialState: ForecastState = {
	forecasts: [],
}

function forecastReducer(state = initialState, action: ForecastAction) {
	switch (action.type) {
		case SET_FORECAST:
			return {
				...state,
				forecasts: action.payload,
			}
		default:
			return state
	}
}
export default forecastReducer
