<script>
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';

	import PostCard from '$lib/components/PostCard.svelte';
	import { onMount } from 'svelte';

	const size = tweened(1, {
		duration: 30000,
		easing: cubicInOut
	});

	// function handleClick() {
	// 	// this is equivalent to size.update(n => n + 1)
	// 	$size += 70;
	// }

	onMount(() => {
		while ($size < 200) {
			$size++;
		}
	});
</script>

<div
	class="slide-container flex flex-col gap-4 h-[600px] w-fit mx-auto overflow-hidden my-20 border border-base-200"
>
	<div style="transform: translateY({$size}%); transform-origin: 0 0" class="slide-item">
		<PostCard props={'video'} />
	</div>

	<div class="slide-item" style="transform: translateY({$size}%); transform-origin: 0 0">
		<PostCard props={'music'} />
	</div>
	<div class="slide-item" style="transform: translateY({$size}%); transform-origin: 0 0">
		<PostCard props={'text'} />
	</div>
	<div class="slide-item" style="transform: translateY({$size}%); transform-origin: 0 0">
		<PostCard props={'music'} />
	</div>
	<div class="slide-item" style="transform: translateY({$size}%); transform-origin: 0 0">
		<PostCard props={'text'} />
	</div>
</div>

<style>
	/* @keyframes slide {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(100%);
		}
	} */

	.slide-container:hover .slide-item {
		animation-play-state: paused;
	}

	.slide-item {
		animation: 5s slide infinite linear;
	}
</style>
