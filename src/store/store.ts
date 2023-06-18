import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import locationReducer from './reducers/locationReducer'
import forecastReducer from './reducers/forecastReducer'

const combineReducersObject = {
	location: locationReducer,
	forecast: forecastReducer,
}
const reducer = combineReducers(combineReducersObject)

const configureStoreObject = {
	reducer,
}
const store = configureStore(configureStoreObject)

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof reducer>

export default store
