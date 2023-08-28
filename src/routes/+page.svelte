<script>
	import HomePageHeader from '$lib/sections/HomePageHeader.svelte';
	import HomePageSecond from '$lib/sections/HomePageSecond.svelte';
	import HomePageThird from '$lib/sections/HomePageThird.svelte';
</script>

<!-- overflow hidden needed as a workaround for HomePageThird NewGradientCards component -->
<div class="overflow-x-hidden">
	<HomePageHeader />
	<HomePageSecond />
	<HomePageThird />
</div>
