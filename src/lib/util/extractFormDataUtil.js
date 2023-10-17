// @ts-nocheck
/**
 * @param {{ target: HTMLFormElement | undefined; }} event
 */
export default function extractFormDataUtil(event) {
	// get the targets from the event
	const formData = new FormData(event.target);

	const data = {};
	for (let field of formData) {
		const [key, value] = field;
		data[key] = value;
	}
	return data;
}
