import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import locationReducer from './reducers/locationReducer'

const reducer = combineReducers({
	location: locationReducer,
})

const store = configureStore({
	reducer,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof reducer>

export default store
