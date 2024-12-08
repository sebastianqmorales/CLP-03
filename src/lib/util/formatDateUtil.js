// @ts-nocheck
// format date to be in this format: 9/9/23
export default function formatDate(date) {
	let formattedDate = new Date(date);
	return formattedDate.toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
}
