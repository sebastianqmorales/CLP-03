<script>
	// @ts-nocheck
	export let data;

	import ArrowIcon from '$lib/assets/arrow-up-right.svg';
	import formatDate from '$lib/util/formatDateUtil.js';
</script>

<!-- come up with a way that the gradients repeat when they reach the limit -->
<div class="min-h-[800px]">
	<div class="flex flex-col md:grid md:grid-cols-2 md:justify-items-center p-6">
		{#each data.blogs as blogs, index}
			<div class="flex flex-col gap-14 p-6 gradient-{index} lg:w-[500px]">
				<h1 class="text-white">{blogs.blog_title}</h1>
				<div class="flex flex-col gap-2 custom-blur px-6 py-8">
					<div class=" flex justify-between">
						<div class="text-white">By {blogs.blog_author}</div>
						<div class="text-white">{formatDate(blogs.created_at)}</div>
					</div>
					<div class="text-white">{blogs.blog_excerpt}</div>
					<a class="flex gap-1 text-white hover:underline" href="blog/{blogs.blog_url}">
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

	.gradient-0 {
		background: linear-gradient(164deg, #331d39 20.86%, rgba(51, 29, 57, 0.85) 70.49%);
	}

	.gradient-1 {
		background: linear-gradient(164deg, #055833 20.86%, rgba(5, 88, 51, 0.85) 70.49%);
	}

	.gradient-2 {
		background: linear-gradient(20deg, #1d2939 32.27%, rgba(29, 41, 57, 0.8) 75.38%);
	}

	.gradient-3 {
		background: linear-gradient(20deg, #40451f 32.27%, rgba(64, 69, 31, 0.8) 75.38%);
	}
	.gradient-4 {
		background: linear-gradient(20deg, #1f453e 32.27%, rgba(31, 69, 62, 0.8) 75.38%);
	}
	.gradient-5 {
		background: linear-gradient(20deg, #45361f 32.27%, rgba(69, 54, 31, 0.8) 75.38%);
	}
</style>
