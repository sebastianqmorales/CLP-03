// @ts-nocheck
export async function load({ locals }) {
	let { data: blogs, error } = await locals.supabase.from('blogs').select('*');
	if (error) {
		return console.log(error);
	}
	return { blogs };
}
