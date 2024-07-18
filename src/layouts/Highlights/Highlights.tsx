import './Highlights.scss'
import Highlight, { Types } from '@components/Highlight/Highlight'
import { RootState } from '@store/store'
import { useSelector } from 'react-redux'

function Highlights() {
	const { currentWeather } = useSelector((state: RootState) => state.forecast)
	if (Object.keys(currentWeather).length > 0)
		return (
			<section id="highlights">
				<h1 className="title">Today's Highlights</h1>
				<div className="list">
					<Highlight type={Types.WIND} data={currentWeather} />
					<Highlight type={Types.HUMIDITY} data={currentWeather} />
					<Highlight type={Types.VISIBILITY} data={currentWeather} />
					<Highlight type={Types.AIR_PRESSURE} data={currentWeather} />
				</div>
			</section>
		)
}
export default Highlights
