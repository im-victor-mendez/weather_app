import './Search.scss'
import { ReactComponent as SearchIcon } from '@/assets/svg/search-outline.svg'
import { ReactComponent as CloseIcon } from '@/assets/svg/close-outline.svg'
import { ReactComponent as ArrowIcon } from '@/assets/svg/arrow-ios-forward.svg'
import { SetStateAction, useState } from 'react'
import { Place, findPlace } from '@/api/location'
import { useAppDispatch } from '@/store/store'
import { Coords } from '@/store/types'
import { setCoords, setLocation } from '@/store/actions/locationActions'
import { setCurrentWeather } from '@/store/actions/forecastActions'

interface Props {
	enableLayout: React.Dispatch<SetStateAction<boolean>>
}

function Search({ enableLayout }: Props) {
	const [search, setSearch] = useState('')
	const [list, setList] = useState<Array<Place>>([])
	const dispatch = useAppDispatch()

	function closeLayout() {
		enableLayout(false)
	}

	function handleChange(event: { target: { value: string } }) {
		const value = event.target.value

		setSearch(value)
	}

	function searchButton(event: { preventDefault: () => void }) {
		event.preventDefault()

		findPlace({ text: search }).then((data) => {
			setList(data)
		})
	}

	interface HandleLocationProps {
		coords: Coords
		location: string
	}
	function handleLocation({ coords, location }: HandleLocationProps) {
		try {
			dispatch(setCoords(coords))
			dispatch(setLocation(location))
			dispatch(setCurrentWeather(coords))
		} catch (error) {
			console.log('Error trying to Handle location: ', error)
		} finally {
			closeLayout()
		}
	}

	return (
		<section id="search">
			<div className="close">
				<CloseIcon className="icon" onClick={closeLayout} />
			</div>
			<form className="top">
				<div className="search">
					<SearchIcon className="icon" />
					<input
						type="search"
						name="location"
						id="location"
						placeholder="search location"
						onChange={handleChange}
						value={search}
					/>
				</div>
				<button type="submit" onClick={searchButton}>
					Search
				</button>
			</form>
			<article className="list">
				{list.map((item) => {
					const lat = parseFloat(item.lat)
					const lon = parseFloat(item.lon)
					const coords = { lat, lon }
					const location = `${item.country}, ${item.adm_area1}, ${item.name}`

					return (
						<button
							key={item.place_id}
							className="result"
							onClick={() => handleLocation({ coords, location })}
						>
							{location}
							<ArrowIcon className="icon" />
						</button>
					)
				})}
			</article>
		</section>
	)
}
export default Search
