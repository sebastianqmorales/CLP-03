// @ts-nocheck
import { json, error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, locals }) {
	// get form
	const GET_USER_FORM = await request.json();

	const USER_FORM = {
		email: GET_USER_FORM.email,
		username: GET_USER_FORM.username,
		message: GET_USER_FORM.message,
		user_type: GET_USER_FORM.usertype
	};

	const { status, statusText } = await locals.supabase.from('user_form').insert(USER_FORM);

	return json({ status, statusText });
}
