<script>
	import HomePageHeader from '$lib/sections/HomePageHeader.svelte';
	import HomePageSecond from '$lib/sections/HomePageSecond.svelte';
	import HomePageThird from '$lib/sections/HomePageThird.svelte';
	import CtaSection from '$lib/components/CtaSection.svelte';
</script>

<!-- overflow hidden needed as a workaround for HomePageHeader component -->
<div class="overflow-x-hidden">
	<HomePageHeader />
	<div class="mb-28">
		<HomePageSecond />
	</div>
	<HomePageThird />
	<CtaSection />
</div>
