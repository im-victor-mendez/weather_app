import { format, isTomorrow } from 'date-fns'

/**
 * Translate data
 * @description Translates string date to
 * `'Tomorrow'` or adapt to `E, d MMM` format.
 * @param date
 * @returns {string}
 * @example
 * // Today = 2023-06-15
 * translateDate("2023-06-16"): 'Tomorrow'
 * translateDate("2023-06-17"): 'Sat, 17 Jun'
 */
export function translateDate(date: string): string {
	const dateInstance = new Date(date)

	if (isTomorrow(dateInstance)) return 'Tomorrow'
	return format(dateInstance, 'E, d MMM')
}
