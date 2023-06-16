import { desSlug } from '@functions/string'
import './Current.scss'
import { Icon } from '@typescript/enums'
import { translateDate } from '@/functions/date'
import { ReactComponent as LocationIcon } from '@assets/svg/alternate-map-marker.svg'

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
	location: string
}

function Current({ data, location }: Props) {
	const imageSrc = IconIndex[data.icon_num - 1].replace('@', './src/')
	const description = desSlug(data.icon)
	const date = new Date().toUTCString()
	const today = translateDate(date)

	return (
		<section id="current">
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
						<p>{location}</p>
					</div>
				</div>
			</article>
		</section>
	)
}
export default Current
