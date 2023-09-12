// @ts-nocheck
export async function load({ locals, params }) {
	let { data: blog, error } = await locals.supabase.from('blogs').select().eq('id', params.blogID);

	if (error) {
		return console.log(error);
	}

	return { blog };
}
