<script>
	import PostCard from '$lib/components/PostCard.svelte';
	import demoIcon from '$lib/assets/demo-icon.svg';
</script>

<div
	data-theme="dark"
	class="background-image flex flex-col md:flex md:flex-row gap-4 md:gap-6 items-center px-3 py-4 lg:px-20 md:py-28 h-full 2xl:px-[15%] justify-center"
>
	<div class="flex flex-col gap-4 md:gap-14 lg:w-2/4 2xl:w-[600px]">
		<div class="flex flex-col gap-1 md:gap-4">
			<div class="text-4xl md:text-5xl 2xl:text-6xl">Support Creators.</div>
			<div class="text-4xl md:text-5xl 2xl:text-6xl">Make money scrolling.</div>
			<div class="text-4xl md:text-5xl 2xl:text-6xl">Never see ads.</div>
			<div class="text-4xl md:text-5xl 2xl:text-6xl">Defeat Big Brother.</div>
		</div>
		<div class="lg:text-lg 2xl:text-xl">
			Cuatex is a micro-transaction based content platform where you can post any type of content
			and sell it as low as half a cent per view. We have engineered transparency into our product,
			allowing you to create algorithms, vote and own your content. All of which create a better
			online community, make you <strong
				><a href="/blog/Earn-money-from-your-social-media-use" class="text-success underline"> money</a></strong
			> and end corporate manipulation.
		</div>
		<div class="flex flex-col gap-3 sm:self-start md:gap-16 md:flex md:flex-row">
			<a href="/sign-up" class="btn 2xl:btn-lg normal-case rounded-none">
				<img src={demoIcon} alt="icon" />
				Demo
			</a>
			<a href="/sign-up" class="btn 2xl:btn-lg btn-primary normal-case rounded-none">Sign up</a>
		</div>
	</div>
	<div class="flex flex-col gap-3 items-center lg:w-2/4">
		<PostCard props={'video'} />
		<PostCard props={'text'} />
		<PostCard props={'music'} />
	</div>
</div>

<style>
	/* * {
		outline: 1px solid red;
		background-color: aqua;
	} */

	.background-image {
		background-image: url('../assets/wavy-background2.svg');
		background-repeat: repeat-x;
		background-position: bottom;
	}
</style>
