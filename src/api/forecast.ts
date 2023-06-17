import { apiOptions, apiUrl } from '.'

type CurrentWeather = {
	lat: string
	lon: string
	elevation: number
	timezone: string
	units: string
	current: {
		icon: string
		icon_num: number
		summary: string
		temperature: number
		feels_like: number
		wind_chill: number
		dew_point: number
		wind: {
			speed: number
			gusts: number
			angle: number
			dir: string
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
}

interface Props {
	lat: number
	lon: number
}

/**
 * Current weather
 * @description Current weather conditions based on weather stations around
 * the world.
 * @param lat Latitude
 * @param lon Longitude
 * @returns {Promise<JSON | unknown>}
 * @example currentWeather({ lat: 37.81021, lon: -122.42282 }): {
  "lat": "37.81021N",
  "lon": "122.42282W",
  "elevation": 0,
  "timezone": "America/Los_Angeles",
  "units": "us",
  "current": {
    "icon": "mostly_cloudy",
    "icon_num": 29,
    "summary": "Mostly cloudy",
    "temperature": 50.6,
    "feels_like": 47,
    "wind_chill": 47,
    "dew_point": 46.1,
    "wind": {
      "speed": 5.2,
      "gusts": 10.7,
      "angle": 267,
      "dir": "W"
    },
    "precipitation": {
      "total": 0,
      "type": "none"
    },
    "cloud_cover": 65,
    "ozone": 338.49,
    "pressure": 30.17,
    "uv_index": 0,
    "humidity": 89,
    "visibility": 15
  }}
 */
export async function currentWeather({
	lat,
	lon,
}: Props): Promise<CurrentWeather> {
	const url = `${apiUrl}current?lat=${lat}&lon=${lon}`

	try {
		const response = await fetch(url, apiOptions)
		const data = await response.json()
		return data as CurrentWeather
	} catch (error) {
		console.error(error)
	}

	return {} as CurrentWeather
}

type DailyData = {
	day: string
	weather: string
	icon: number
	summary: string
	predictability: number
	temperature: number
	temperature_min: number
	temperature_max: number
	feels_like: number
	feels_like_min: number
	feels_like_max: number
	wind_chill: number
	wind_chill_min: number
	wind_chill_max: number
	dew_point: number
	dew_point_min: number
	dew_point_max: number
	wind: {
		speed: number
		gusts: number
		dir: string
		angle: number
	}
	cloud_cover: number
	pressure: number
	precipitation: {
		total: number
		type: string
	}
	probability: {
		precipitation: number
		storm: number
		freeze: number
	}
	ozone: number
	humidity: number
	visibility: number
}

type DailyWeather = {
	lat: string
	lon: string
	elevation: number
	units: string
	daily: {
		data: Array<DailyData>
	}
}

/**
 * Daily weather
 * @description Daily weather forecast for the next 21 days.
 * @param lat Latitude
 * @param lon Longitude
 * @returns {Promise<JSON | unknown>}
 * @example dailyWeather({ lat: 37.81021, lon: -122.42282 }): {
  "lat": "37.81021N",
  "lon": "122.42282W",
  "elevation": 0,
  "units": "us",
  "daily": {
    "data": [
      {
        "day": "2022-02-18",
        "weather": "mostly_cloudy",
        "icon": 5,
        "summary": "Cloudy, fewer clouds in the afternoon. Temperature 52/60 °F.",
        "predictability": 1,
        "temperature": 55.6,
        "temperature_min": 51.5,
        "temperature_max": 59.6,
        "feels_like": 52,
        "feels_like_min": 46.1,
        "feels_like_max": 58.3,
        "wind_chill": 54.2,
        "wind_chill_min": 48.8,
        "wind_chill_max": 59.6,
        "dew_point": 43.9,
        "dew_point_min": 40.3,
        "dew_point_max": 47.9,
        "wind": {
          "speed": 4,
          "gusts": 7.6,
          "dir": "N",
          "angle": 356
        },
        "cloud_cover": 65,
        "pressure": 30.24,
        "precipitation": {
          "total": 0,
          "type": "none"
        },
        "probability": {
          "precipitation": 0,
          "storm": 0,
          "freeze": 0
        },
        "ozone": 292.91,
        "humidity": 68,
        "visibility": 15
      }, ...
    ]
  }
}
 */
export async function dailyWeather({ lat, lon }: Props): Promise<DailyWeather> {
	const url = `${apiUrl}daily?lat=${lat}&lon=${lon}`

	try {
		const response = await fetch(url, apiOptions)
		const data = await response.json()
		return data as DailyWeather
	} catch (error) {
		console.error(error)
	}

	return {} as DailyWeather
}
