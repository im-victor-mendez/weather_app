export const apiUrl = 'https://ai-weather-by-meteosource.p.rapidapi.com/'
export const apiHeaders = JSON.parse(import.meta.env.VITE_API_HEADERS)
export const apiOptions = {
	method: 'GET',
	headers: apiHeaders,
}
