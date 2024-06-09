// @ts-nocheck
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, locals }) {
	// get form
	const GET_USER_FORM = await request.json();

	const USER_FORM = {
		email: GET_USER_FORM.email
	};

	const { status, statusText } = await locals.supabase.from('user_email_form').insert(USER_FORM);

	return json({ status, statusText });
}
