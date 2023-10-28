<script>
	// @ts-nocheck
	export let data;

	import ArrowIcon from '$lib/assets/arrow-up-right.svg';
	import formatDate from '$lib/util/formatDateUtil.js';
</script>

<!-- come up with a way that the gradients repeat when they reach the limit -->
<div class="max-w-7xl mx-auto">
	<div
		class="flex flex-col p-2 sm:p-6 gap-5 md:grid md:grid-cols-2 md:justify-items-center md:grid-rows-2 lg:grid-cols-3"
	>
		{#each data.blogs as blogs}
			<div class="flex flex-col gap-10 p-6 gradient-{blogs.blog_gradient} w-full h-auto">
				<h1 class="text-white">{blogs.blog_title}</h1>
				<div class="flex flex-col gap-4 custom-blur px-6 py-8">
					<div class=" flex justify-between">
						<div class="text-gray-200">By {blogs.blog_author}</div>
						<div class="text-gray-200">{formatDate(blogs.created_at)}</div>
					</div>
					<div class="text-white">{blogs.blog_excerpt}</div>
					<a
						class="flex gap-1 text-white font-semibold tracking-wide hover:underline"
						href="blog/{blogs.blog_url}"
					>
						Read post
						<img src={ArrowIcon} alt="icon" />
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.custom-blur {
		border: 1px solid rgba(255, 255, 255, 0.5);
		background: rgba(255, 255, 255, 0.3);

		/* Background blur / lg */
		backdrop-filter: blur(12px);
	}
</style>
