import './Search.scss'
import { ReactComponent as SearchIcon } from '@assets/svg/search-outline.svg'
import { ReactComponent as CloseIcon } from '@assets/svg/close-outline.svg'
import { ReactComponent as ArrowIcon } from '@assets/svg/arrow-ios-forward.svg'
import { SetStateAction, useState } from 'react'
import { Place, findPlace } from '@/api/location'

interface Props {
	enableLayout: React.Dispatch<SetStateAction<boolean>>
}

function Search({ enableLayout }: Props) {
	const [search, setSearch] = useState('')
	const [list, setList] = useState<Array<Place>>([])

	function closeLayout() {
		enableLayout(false)
	}

	function handleChange(event: { target: { value: string } }) {
		const value = event.target.value

		setSearch(value)
	}

	function searchButton() {
		findPlace({ text: search }).then((data) => {
			setList(data)
		})
	}

	return (
		<section id="search">
			<div className="close">
				<CloseIcon className="icon" onClick={closeLayout} />
			</div>
			<div className="top">
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
				<button onClick={searchButton}>Search</button>
			</div>
			<article className="list">
				{list.map((item) => (
					<button key={item.place_id} className="result">
						{item.country}, {item.adm_area1}, {item.name}
						<ArrowIcon className="icon" />
					</button>
				))}
			</article>
		</section>
	)
}
export default Search
