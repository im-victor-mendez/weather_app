import './Highlight.scss'
import { ReactComponent as LocationIcon } from '@assets/svg/location-arrow.svg'

export enum Types {
	WIND,
	HUMIDITY,
	VISIBILITY,
	AIR_PRESSURE,
}

type CurrentType = {
	lat: string
	lon: string
	elevation: number
	timezone: string
	units: string
	current: {
		icon: string
		icon_num: number
		summary: string
		temperature: number
		feels_like: number
		wind_chill: number
		dew_point: number
		wind: {
			speed: number
			gusts: number
			angle: number
			dir: string
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
}

interface Props {
	type: Types
	data: CurrentType
}

/**
 * Highlight
 * @description Component to display current (today) highlight values.
 * @param type Type of Highlight from Types enum
 * @param data Data to display as CurrentType type
 * @returns {React.JSX.Element}
 * @example <Highlight type={Types.WIND} data={data} />
 */
function Highlight({ type, data }: Props): React.JSX.Element {
	const contentMap: { [key in Types]: React.ReactNode } = {
		[Types.WIND]: <Wind data={data} />,
		[Types.HUMIDITY]: <Humidity data={data} />,
	}

	return <section className="highlight">{contentMap[type]}</section>
}

interface TypeProps {
	data: CurrentType
}

/**
 * Wind
 * @description Content to display wind data
 * @param data Current data
 * @returns {React.JSX.Element}
 */
function Wind({ data }: TypeProps): React.JSX.Element {
	const wind = data.current.wind

	return (
		<>
			<section className="top">
				<h1 className="title">Wind status</h1>
				<article className="value">
					<span className="big">{wind.speed}</span>mph
				</article>
			</section>
			<div className="wind">
				<div className="icon">
					<LocationIcon
						className="arrow"
						style={{ rotate: `${wind.angle}deg` }}
					/>
				</div>
				<p className="string">{wind.dir}</p>
			</div>
		</>
	)
}

/**
 * Humidity
 * @description Content to display humidity data
 * @param data Current data
 * @returns {React.JSX.Element}
 */
function Humidity({ data }: TypeProps): React.JSX.Element {
	const humidity = data.current.humidity

	return (
		<>
			<section className="top">
				<h1 className="title">Humidity</h1>
				<article className="value">
					<span className="big">{humidity}</span>%
				</article>
			</section>
			<section className="humidity">
				<div className="percentages">
					<p>0</p>
					<p>50</p>
					<p>100</p>
				</div>
				<div className="bar">
					<div className="value" style={{ width: `${humidity}%` }}></div>
					<div className="background"></div>
				</div>
				<div className="percentage-icon">%</div>
			</section>
		</>
	)
}
export default Highlight
