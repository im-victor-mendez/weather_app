export function desSlug(str: string): string {
	const words = str.split('_')
	const transformedWords = words.map((word) => {
		const firstLetter = word.charAt(0).toUpperCase()
		const restOfWord = word.slice(1)
		return firstLetter + restOfWord
	})
	return transformedWords.join(' ')
}
