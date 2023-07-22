export function formatDate(date: string) {
	return new Date(date).toLocaleString('en-GB', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
}

export function isDateBeforeOther(a: string, b: string) {
	return new Date(a) < new Date(b);
}
