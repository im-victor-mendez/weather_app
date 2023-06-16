import { Icon } from '@typescript/enums'
import './Forecast.scss'
import { translateDate } from '@functions/date'

type ForecastType = {
	day: string
	weather: string
	icon: number
	summary: string
	predictability: number
	temperature: number
	temperature_min: number
	temperature_max: number
	feels_like: number
	feels_like_min: number
	feels_like_max: number
	wind_chill: number
	wind_chill_min: number
	wind_chill_max: number
	dew_point: number
	dew_point_min: number
	dew_point_max: number
	wind: {
		speed: number
		gusts: number
		dir: string
		angle: number
	}
	cloud_cover: number
	pressure: number
	precipitation: {
		total: number
		type: string
	}
	probability: {
		precipitation: number
		storm: number
		freeze: number
	}
	ozone: number
	humidity: number
	visibility: number
}

const IconIndex = Object.values(Icon)

interface Props {
	data: ForecastType
}

/**
 * Forecast
 * @description Forecast div to display weather prognostics.
 * @param data
 * @returns {React.JSX.Element}
 */
function Forecast({ data }: Props): React.JSX.Element {
	const day = translateDate(data.day)
	const imageSrc = IconIndex[data.icon - 1].replace('@', './src/')

	return (
		<div className="forecast">
			<div className="top">
				<h1 className="day">{day}</h1>
				<img className="icon" src={imageSrc} alt={`${data.weather} icon`} />
			</div>
			<div className="temperature">
				<p className="max">{data.temperature_max}</p>
				<p className="min">{data.temperature_min}</p>
			</div>
		</div>
	)
}
export default Forecast
