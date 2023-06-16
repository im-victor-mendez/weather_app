import './Search.scss'
import { ReactComponent as SearchIcon } from '@assets/svg/search-outline.svg'

function Search() {
	return (
		<section id="search">
			<div className="top">
				<div className="search">
					<SearchIcon className="icon" />
					<input
						type="search"
						name="location"
						id="location"
						placeholder="search location"
					/>
				</div>
				<button>Search</button>
			</div>
		</section>
	)
}
export default Search
