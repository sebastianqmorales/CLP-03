<script>
	// @ts-nocheck

	export let data;

	import ArrowIcon from '$lib/assets/arrow-up-right.svg';
	import formatDate from '$lib/util/formatDateUtil.js';
	console.log(data);
	let { created_at, blog_title, blog_excerpt, blog_content, blog_author, blog_gradient } =
		data.blog[0];
</script>

<svelte:head>
	<title>{blog_title}</title>
	<meta name="description" content={blog_excerpt} />
</svelte:head>

<div class="flex flex-col gap-6 px-5 py-10 max-w-[1300px] mx-auto md:px-20 md:pb-20">
	<a href="/blog" class="btn-neutral cursor-pointer w-[100px] pr-2 py-1 flex gap-1 justify-center">
		<img class="scale-x-[-1]" src={ArrowIcon} alt="icon" />
		Back
	</a>
	<div class="flex flex-col gradient-{blog_gradient} p-10 gap-3">
		<div class="flex flex-col px-16 gap-3">
			<h1 class="self-center text-white lg:text-3xl">{blog_title}</h1>
			<p class="self-center text-white lg:text-lg">{blog_excerpt}</p>
		</div>
		<div class="flex justify-between pt-10">
			<div class="text-white lg:text-lg">By {blog_author}</div>
			<div class="text-white lg:text-lg">{formatDate(created_at)}</div>
		</div>
	</div>
	<div class="backdrop-blur-md bg-base-200 p-10">
		<div class=" flex flex-col gap-3 lg:gap-8 lg:text-xl lg:leading-loose">
			{@html blog_content}
		</div>
	</div>
</div>

<style>
	.custom-blur {
		border: 1px solid rgba(255, 255, 255, 0.5);
		background: rgba(255, 255, 255, 0.3);

		/* Background blur / lg */
		backdrop-filter: blur(12px);
	}

	.gradient-0 {
		background: linear-gradient(164deg, #331d39 20.86%, rgba(51, 29, 57, 0.85) 70.49%);
	}
</style>
