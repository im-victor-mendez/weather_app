import './App.scss'
import { useSelector } from 'react-redux'
import Current from './layouts/Current/Current'
import Forecasts from './layouts/Forecasts/Forecasts'
import { RootState, useAppDispatch } from './store/store'
import { useEffect } from 'react'
import Highlights from './layouts/Highlights/Highlights'

function App() {
	const dispatch = useAppDispatch()
	const { location, lat, lon } = useSelector(
		(state: RootState) => state.location
	)
	const { forecasts } = useSelector((state: RootState) => state.forecast)
	const { currentWeather } = useSelector((state: RootState) => state.forecast)
	const geolocationAPI = navigator.geolocation

	useEffect(() => {}, [dispatch, geolocationAPI, lat, lon])

	return (
		<>
			<Current data={currentWeather} location={location} />
			{Object.keys(forecasts).length > 0 && currentWeather && (
				<article id="data">
					<Forecasts />
					<Highlights />
				</article>
			)}
		</>
	)
}

export default App
