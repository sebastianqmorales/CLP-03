// @ts-nocheck
import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	const session = await locals.getSession();
	if (!session) {
		console.log(session);
		throw redirect(307, '/auth');
	}
}

export const actions = {
	submitBlog: async ({ request, locals }) => {
		// get session from locals, get admin profile from session.user.id
		// get form data from request
		// post data to blogs table
		const getAdminName = async () => {
			const session = await locals.getSession();
			const userID = await session.user.id;
			let { data } = await locals.supabase.from('admin').select().eq('id', userID);
			return data;
		};
		const author = await getAdminName();
		const body = Object.fromEntries(await request.formData());
		const BLOG_POST = {
			blog_title: body.title,
			blog_excerpt: body.excerpt,
			blog_content: body.content,
			blog_author: author[0].admin_name
		};
		console.log(author, BLOG_POST);
		return (await locals.supabase.from('blogs').insert(BLOG_POST)).error;
	}
};
