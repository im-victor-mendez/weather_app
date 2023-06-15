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

enum Icon {
	'NOT AVAILABLE' = '',
	'SUNNY' = '@assets/images/Clear.png',
	'MOSTLY SUNNY' = '@assets/images/LightCloud.png',
	'PARTLY SUNNY' = '@assets/images/LightCloud.png',
	'MOSTLY CLOUDY' = '@assets/images/Cloud-background.png',
	'CLOUDY' = '@assets/images/HeavyCloud.png',
	'OVERCAST' = '@assets/images/HeavyCloud.png',
	'OVERCAST WITH LOW CLOUDS' = '@assets/images/HeavyCloud.png',
	'FOG' = '@assets/images/HeavyCloud.png',
	'LIGHT RAIN' = '@assets/images/LightRain.png',
	'RAIN' = '@assets/images/HeavyRain.png',
	'POSSIBLE RAIN' = '@assets/images/HeavyRain.png',
	'RAIN SHOWER' = '@assets/images/Shower.png',
	'THUNDERSTORM' = '@assets/images/Thunderstorm.png',
	'LOCAL THUNDERSTORMS' = '@assets/images/Thunderstorm.png',
	'LIGHT SNOW' = '@assets/images/Snow.png',
	'SNOW' = '@assets/images/Snow.png',
	'POSSIBLE SNOW' = '@assets/images/Snow.png',
	'SNOW SHOWER' = '@assets/images/Sleet.png',
	'RAIN AND SNOW' = '@assets/images/Sleet.png',
	'POSSIBLE RAIN AND SNOW' = '@assets/images/Sleet.png',
	'FREEZING RAIN' = '@assets/images/Sleet.png',
	'POSSIBLE FREEZING RAIN' = '@assets/images/Sleet.png',
	'HAIL' = '@assets/images/Hail.png',
	'CLEAR (NIGHT)' = '@assets/images/',
	'MOSTLY CLEAR (NIGHT)' = '@assets/images/',
	'PARTLY CLEAR (NIGHT)' = '@assets/images/',
	'MOSTLY CLOUDY (NIGHT)' = '@assets/images/',
	'CLOUDY (NIGHT)' = '@assets/images/',
	'OVERCAST WITH LOW CLOUDS (NIGHT)' = '@assets/images/',
	'RAIN SHOWER (NIGHT)' = '@assets/images/',
	'LOCAL THUNDERSTORMS (NIGHT)' = '@assets/images/',
	'SNOW SHOWER (NIGHT)' = '@assets/images/',
	'RAIN AND SNOW (NIGHT)' = '@assets/images/',
	'POSSIBLE FREEZING RAIN (NIGHT)' = '@assets/images/',
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
