import { apiOptions, apiUrl } from '.'

interface Props {
	text: string
}

/**
 * Find place
 * @description Find places by name to get `place_id` for the
 * Weather Forecast Endpoints and detailed geographical information
 * @param text Name place
 * @returns {Promise<JSON | unknown>}
 * @example findPlace({ text: 'fishermans wharf' }): [{
    "name": "Fishermans Wharf",
    "place_id": "fishermans-wharf",
    "adm_area1": "California",
    "adm_area2": "Contra Costa",
    "country": "United States of America",
    "lat": "37.80761N",
    "lon": "-122.41714W",
    "timezone": "America/Los_Angeles",
    "type": "settlement"
  }]
 */
export async function findPlace({ text }: Props): Promise<JSON | unknown> {
	const url = `${apiUrl}find_places?text=${text}`

	try {
		const response = await fetch(url, apiOptions)
		const data = await response.json()
		return data
	} catch (error) {
		return error
	}
}

/**
 * Find place prefix
 * @description Find places by beginning of the name to get `place_id` for the
 * Weather Forecast Endpoints and detailed geographical information
 * @param text Place name prefix
 * @returns {Promise<JSON | unknown>}
 * @example findPlacePrefix({ text: 'fishermans wh' }): [{
    "name": "Fishermans Wharf",
    "place_id": "fishermans-wharf",
    "adm_area1": "California",
    "adm_area2": "Contra Costa",
    "country": "United States of America",
    "lat": "37.80761N",
    "lon": "-122.41714W",
    "timezone": "America/Los_Angeles",
    "type": "settlement"
  }]
 */
export async function findPlacePrefix({
	text,
}: Props): Promise<JSON | unknown> {
	const url = `${apiUrl}find_places_prefix?text=${text}`

	try {
		const response = await fetch(url, apiOptions)
		const data = await response.json()
		return data
	} catch (error) {
		return error
	}
}

interface PlaceProps {
	lat: number
	lon: number
}

/**
 * Nearest place
 * @description Find nearest named places (village, town, city) from a given
 * GPS coordinates. Gets `place_id` for the Weather Forecast Endpoints and
 * detailed geographical information
 * @param lat Latitude
 * @param lon Longitude
 * @returns {Promise<JSON | unknown>}
 * @example nearestPlace({ lat: 37.81021, lon: -122.42282 }): [{
    "name": "Fisherman's Warf",
    "place_id": "fishermans-warf",
    "adm_area1": "California",
    "adm_area2": "San Francisco County",
    "country": "United States of America",
    "lat": "37.808N",
    "lon": "122.41774W",
    "timezone": "America/Los_Angeles",
    "type": "settlement"
  }]
 */
export async function nearestPlace({
	lat,
	lon,
}: PlaceProps): Promise<JSON | unknown> {
	const url = `${apiUrl}nearest_place?lat=${lat}&lon=${lon}`

	try {
		const response = await fetch(url, apiOptions)
		const data = await response.json()
		return data
	} catch (error) {
		return error
	}
}
