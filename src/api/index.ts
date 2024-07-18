export const apiUrl = 'https://ai-weather-by-meteosource.p.rapidapi.com/'
export const apiOptions: RequestInit = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': import.meta.env.VITE_API_KEY,
		'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com',
	},
}
