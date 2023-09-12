// format date to be in this format: 9/9/23
/**
 * @param {string | number | Date} date
 */
export default function formatDate(date) {
	let formattedDate = new Date(date);
	return formattedDate.toLocaleDateString('en-GB', {
		year: 'numeric',
		day: 'numeric',
		month: 'long'
	});
}
