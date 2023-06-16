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
	NOT_AVAILABLE = '',
	SUNNY = '@assets/images/Clear.png',
	MOSTLY_SUNNY = '@assets/images/LightCloud.png',
	PARTLY_SUNNY = '@assets/images/LightCloud.png',
	MOSTLY_CLOUDY = '@assets/images/Cloud-background.png',
	CLOUDY = '@assets/images/HeavyCloud.png',
	OVERCAST = '@assets/images/HeavyCloud.png',
	OVERCAST_WITH_LOW_CLOUDS = '@assets/images/HeavyCloud.png',
	FOG = '@assets/images/HeavyCloud.png',
	LIGHT_RAIN = '@assets/images/LightRain.png',
	RAIN = '@assets/images/HeavyRain.png',
	POSSIBLE_RAIN = '@assets/images/HeavyRain.png',
	RAIN_SHOWER = '@assets/images/Shower.png',
	THUNDERSTORM = '@assets/images/Thunderstorm.png',
	LOCAL_THUNDERSTORMS = '@assets/images/Thunderstorm.png',
	LIGHT_SNOW = '@assets/images/Snow.png',
	SNOW = '@assets/images/Snow.png',
	POSSIBLE_SNOW = '@assets/images/Snow.png',
	SNOW_SHOWER = '@assets/images/Sleet.png',
	RAIN_AND_SNOW = '@assets/images/Sleet.png',
	POSSIBLE_RAIN_AND_SNOW = '@assets/images/Sleet.png',
	FREEZING_RAIN = '@assets/images/Sleet.png',
	POSSIBLE_FREEZING_RAIN = '@assets/images/Sleet.png',
	HAIL = '@assets/images/Hail.png',
	CLEAR_NIGHT = '@assets/images/',
	MOSTLY_CLEAR_NIGHT = '@assets/images/',
	PARTLY_CLEAR_NIGHT = '@assets/images/',
	MOSTLY_CLOUDY_NIGHT = '@assets/images/',
	CLOUDY_NIGHT = '@assets/images/',
	OVERCAST_WITH_LOW_CLOUDS_NIGHT = '@assets/images/',
	RAIN_SHOWER_NIGHT = '@assets/images/',
	LOCAL_THUNDERSTORMS_NIGHT = '@assets/images/',
	SNOW_SHOWER_NIGHT = '@assets/images/',
	RAIN_AND_SNOW_NIGHT = '@assets/images/',
	POSSIBLE_FREEZING_RAIN_NIGHT = '@assets/images/',
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
