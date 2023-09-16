<script>
	// @ts-nocheck

	export let data;

	import formatDate from '$lib/util/formatDateUtil.js';
	console.log(data);
	let { created_at, blog_title, blog_excerpt, blog_content, blog_author } = data.blog[0];
</script>

<svelte:head>
	<title>{blog_title}</title>
	<meta name="description" content={blog_excerpt} />
</svelte:head>

<div class="flex flex-col gap-6 px-5 py-10 md:px-20 md:pt-10 md:pb-20">
	<div class="flex flex-col items-center">
		<h1>{blog_title}</h1>
		<p class="text-secondary-content">{blog_excerpt}</p>
	</div>
	<div class="flex justify-between">
		<div>By {blog_author}</div>
		<div class="text-secondary-content">{formatDate(created_at)}</div>
	</div>
	<div>{@html blog_content}</div>
</div>
