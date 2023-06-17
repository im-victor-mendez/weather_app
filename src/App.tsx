import './App.scss'
import { useSelector } from 'react-redux'
import Current from './layouts/Current/Current'
import Forecasts from './layouts/Forecasts/Forecasts'
import { RootState, useAppDispatch } from './store/store'
import { setLocationForecast } from './store/actions/forecastActions'
import { useEffect } from 'react'
import Highlights from './layouts/Highlights/Highlights'
import { setCurrentWeather } from './store/actions/locationActions'

function App() {
	const { location, lat, lon } = useSelector(
		(state: RootState) => state.location
	)
	const dispatch = useAppDispatch()
	const { currentWeather } = useSelector((state: RootState) => state.forecast)
	const geolocationAPI = navigator.geolocation

	useEffect(() => {
		if (lat && lon) {
			dispatch(setCurrentWeather({ lat, lon }))
			dispatch(setLocationForecast({ lat, lon }))
		}
	}, [dispatch, geolocationAPI, lat, lon])

	return (
		<>
			<Current data={currentWeather} location={location} />
			<article id="data">
				<Forecasts />
				<Highlights />
			</article>
		</>
	)
}

export default App
