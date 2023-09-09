// @ts-nocheck
import { json, error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, locals }) {
	const session = await locals.getSession();
	if (!session) {
		throw error(401, { message: 'Unauthorized' });
	}
	const getAdminName = async () => {
		const userID = await session.user.id;
		let { data } = await locals.supabase.from('admin').select().eq('id', userID);
		return data;
	};
	const author = await getAdminName();

	const BLOG = await request.json();

	const BLOG_POST = {
		blog_title: BLOG.form.title,
		blog_excerpt: BLOG.form.excerpt,
		blog_content: BLOG.editor,
		blog_author: author[0].admin_name
	};

	const { status, statusText } = await locals.supabase.from('blogs').insert(BLOG_POST);

	return json({ status, statusText });
}
