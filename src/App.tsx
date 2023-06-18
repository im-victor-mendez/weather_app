import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './App.scss'
import Current from './layouts/Current/Current'
import Forecasts from './layouts/Forecasts/Forecasts'
import Highlights from './layouts/Highlights/Highlights'
import { RootState, useAppDispatch } from './store/store'
import { setCoords, setLocation } from './store/actions/locationActions'
import { dailyWeather } from './api/forecast'
import { setCurrentWeather, setForecast } from './store/actions/forecastActions'
import reverseGeocoding from './api/reverseGeocoding'

function App() {
	const dispatch = useAppDispatch()
	const { lat, lon } = useSelector((state: RootState) => state.location)

	const geolocationAPI = navigator.geolocation

	useEffect(() => {
		const condition = !(lat && lon)
		if (condition) return undefined

		const coords = { lat, lon }
		dispatch(setCoords(coords))
		reverseGeocoding(coords).then((data) => dispatch(setLocation(data.city)))
		dispatch(setCurrentWeather(coords))
		dailyWeather(coords).then((data) => {
			const forecastArray = data.daily.data.slice(1, 6)
			return dispatch(setForecast(forecastArray))
		})
	}, [dispatch, geolocationAPI, lat, lon])

	return (
		<>
			<Current />
			<Data />
		</>
	)
}

function Data() {
	const { forecasts } = useSelector((state: RootState) => state.forecast)
	const { currentWeather } = useSelector((state: RootState) => state.forecast)

	const condition = Object.keys(forecasts).length > 0 && currentWeather
	if (condition)
		return (
			<article id="data">
				<Forecasts />
				<Highlights />
			</article>
		)
}

export default App
