<script>
	import PostCard from '$lib/components/PostCard.svelte';
	import demoIcon from '$lib/assets/demo-icon.svg';
</script>

<div
	data-theme="dark"
	class="flex flex-col md:flex md:flex-row gap-4 md:gap-6 items-center px-3 py-4 h-full md:h-[800px] background-image"
>
	<div class="flex flex-col gap-4 md:gap-14 w-full">
		<div class="flex flex-col gap-1 md:gap-4">
			<div class="text-4xl md:text-5xl">Support Creators.</div>
			<div class="text-4xl md:text-5xl">Make money scrolling.</div>
			<div class="text-4xl md:text-5xl">Never see ads.</div>
			<div class="text-4xl md:text-5xl">Defeat Big Brother.</div>
		</div>
		<div class="description">
			Cuatex is a micro-transaction based content platform where you can post any type of content
			and sell it as low as half a cent per view. We have engineered transparency into our product,
			allowing you to create algorithms, vote and own your content. All of which create a better
			online community, make you <strong
				><a href="/" class="text-success underline"> money</a></strong
			> and end corporate manipulation.
		</div>
		<div class="flex flex-col gap-3 md:flex md:flex-row md:justify-evenly">
			<div class="btn">
				<img src={demoIcon} alt="icon" />
				Demo
			</div>
			<div class="btn btn-primary">Sign up</div>
		</div>
	</div>
	<div class="flex flex-col gap-3">
		<PostCard props={'video'} />
		<PostCard props={'text'} />
		<PostCard props={'music'} />
	</div>
</div>

<style>
	.background-image {
		background-image: url('../assets/wavy-background.svg');
		background-repeat: repeat-x;
		background-position: bottom;
	}
</style>
