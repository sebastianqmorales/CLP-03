// @ts-nocheck
export async function load({ locals, params }) {
	let { data: blog, error } = await locals.supabase
		.from('blogs')
		.select()
		.eq('blog_title', params.slug);

	if (error) {
		return console.log(error);
	}

	return { blog };
}
