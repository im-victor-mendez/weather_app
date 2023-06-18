import {
	LocationAction,
	LocationState,
	SET_COORDS,
	SET_LOCATION,
} from '../types'

const initialState = {} as LocationState

function locationReducer(state = initialState, action: LocationAction) {
	switch (action.type) {
		case SET_COORDS:
			return {
				...state,
				lat: action.payload.lat,
				lon: action.payload.lon,
			}
		case SET_LOCATION:
			return {
				...state,
				location: action.payload,
			}
		default:
			return state
	}
}
export default locationReducer
