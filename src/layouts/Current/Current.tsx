import { desSlug } from '@functions/string'
import './Current.scss'
import { Icon } from '@typescript/enums'
import { translateDate } from '@/functions/date'
import { ReactComponent as LocationIcon } from '@assets/svg/alternate-map-marker.svg'
import { ReactComponent as CurrentLocationIcon } from '@assets/svg/current-location.svg'
import { useAppDispatch } from '@/store/store'
import { setCoords } from '@/store/actions/locationActions'

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

interface Props {
	data: Current
	location: string | undefined
}

function Current({ data, location }: Props) {
	const dispatch = useAppDispatch()

	if (data == undefined) return null

	const imageSrc =
		Object.keys(data).length > 0
			? IconIndex[data.icon_num - 1].replace('@', './src/')
			: IconIndex[1].replace('@', './src/')
	const description = desSlug(data.icon || '')
	const date = new Date().toUTCString()
	const today = translateDate(date)

	function getCurrentLocation() {
		const geolocationAPI = navigator.geolocation

		geolocationAPI.getCurrentPosition(success)

		function success(location: GeolocationPosition) {
			const { latitude, longitude } = location.coords
			dispatch(setCoords({ lat: latitude, lon: longitude }))
		}
	}

	return (
		<section id="current">
			<div className="top">
				<button className="search">Search for places</button>
				<CurrentLocationIcon className="icon" onClick={getCurrentLocation} />
			</div>
			<div className="icon">
				<img src={imageSrc} alt={`${data.icon} icon`} />
			</div>
			<article className="info">
				<div className="temperature">
					<h1 className="value">
						<span className="big">{data.temperature}</span>
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
