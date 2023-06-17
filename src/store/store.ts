import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import locationReducer from './reducers/locationReducer'
import forecastReducer from './reducers/forecastReducer'

const reducer = combineReducers({
	location: locationReducer,
	forecast: forecastReducer,
})

const store = configureStore({
	reducer,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof reducer>

export default store
