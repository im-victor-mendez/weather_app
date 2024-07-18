import { translateDate } from '@functions/date'
import { setCoords } from '@store/actions/locationActions'
import { RootState, useAppDispatch } from '@store/store'
import { ReactComponent as LocationIcon } from '@assets/svg/alternate-map-marker.svg'
import { ReactComponent as CurrentLocationIcon } from '@assets/svg/current-location.svg'
import { desSlug } from '@functions/string'
import { Icon } from '@typescript/enums'
import { useState } from 'react'
import Search from '../Search/Search'
import './Current.scss'
import { useSelector } from 'react-redux'

type Current = {
	icon: string
	icon_num: number
	summary: string
	temperature: number
	feels_like: number
	wind_chill: number
	dew_point: number
	wind: {
		angle: number
		dir: string
		gusts: number
		speed: number
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

const IconIndex = Object.values(Icon)

function Current() {
	const [search, setSearch] = useState(false)
	const dispatch = useAppDispatch()

	const { currentWeather } = useSelector((state: RootState) => state.forecast)
	const { location } = useSelector((state: RootState) => state.location)

	if (currentWeather == undefined) return null

	const imageSrc =
		Object.keys(currentWeather).length > 0
			? IconIndex[currentWeather.icon_num - 1].replace('@', './src/')
			: IconIndex[1].replace('@', './src/')

	const description = desSlug(currentWeather.icon || '')
	const date = new Date().toUTCString()
	const today = translateDate(date)

	function enableSearch() {
		setSearch(true)
	}

	function getCurrentLocation() {
		const geolocationAPI = navigator.geolocation

		geolocationAPI.getCurrentPosition(success)

		function success(location: GeolocationPosition) {
			const { latitude, longitude } = location.coords
			dispatch(setCoords({ lat: latitude, lon: longitude }))
		}
	}

	if (search) return <Search enableLayout={setSearch} />

	return (
		<section id="current">
			<div className="top">
				<button className="search" onClick={enableSearch}>
					Search for places
				</button>
				<CurrentLocationIcon className="icon" onClick={getCurrentLocation} />
			</div>
			<div className="icon">
				<img src={imageSrc} alt={`${currentWeather.icon} icon`} />
			</div>
			<article className="info">
				<div className="temperature">
					<h1 className="value">
						<span className="big">{currentWeather.temperature}</span>
					</h1>
					<h2 className="string">{description}</h2>
				</div>
				<div className="text">
					<div className="description">
						<p>Today</p>
						<p>∙</p>
						<p>{today}</p>
					</div>
					<div className="location">
						<LocationIcon className="icon location" />
						<p>{location || 'Search a place or use your location! :D'}</p>
					</div>
				</div>
			</article>
		</section>
	)
}
export default Current
