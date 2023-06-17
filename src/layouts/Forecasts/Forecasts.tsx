import './Forecasts.scss'
import Forecast from '@/components/Forecast/Forecast'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

function Forecasts() {
	const { forecasts } = useSelector((state: RootState) => state.forecast)
	if (forecasts)
		return (
			<section id="forecasts">
				{forecasts.map((forecast) => (
					<Forecast key={forecast.day} data={forecast} />
				))}
			</section>
		)
}
export default Forecasts
