export const url = 'https://api.bigdatacloud.net/data/reverse-geocode-client'

type Administrative = {
	name: string
	description: string
	order: number
	adminLevel: number
	isoCode: string
	wikidataId: string
	geonameId: number
}

type Informative = {
	name: string
	description: string
	order: number
	isoCode: string
	wikidataId: string
	geonameId: number
}

type LocalityInfo = {
	LikelyLand: boolean
	administrative: Array<Administrative>
	informative: Array<Informative>
}

type Data = {
	latitude: number
	longitude: number
	continent: string
	lookupSource: string
	continentCode: string
	localityLanguageRequested: string
	city: string
	countryName: string
	countryCode: string
	postcode: string
	principalSubdivision: string
	principalSubdivisionCode: string
	plusCode: string
	locality: string
	localityInfo: LocalityInfo
}

interface Props {
	lat: number | string
	lon: number | string
}

/**
 * Reverse geocoding
 * @description Gets information of geocoding (latitude and longitude).
 * @param lat Latitude
 * @param lon Longitude
 * @returns {Promise<Data>}
 * @example reverseGeocoding({ lat: 12, lon: 12 }): Data
 */
async function reverseGeocoding({ lat, lon }: Props): Promise<Data> {
	try {
		const response = await fetch(`${url}?latitude=${lat}&longitude=${lon}`)
		const data = await response.json()
		return data as Data
	} catch (error) {
		console.log(error)
	}
	return {} as Data
}
export default reverseGeocoding
