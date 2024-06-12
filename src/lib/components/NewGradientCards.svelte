<script>
	// @ts-nocheck

	import ArrowIcon from '$lib/assets/arrow-up-right.svg';
	import ChevronLeft from '$lib/assets/chevron-left-icon.svg';
	import ChevronRight from '$lib/assets/chevron-right-icon.svg';

	/**
	 * @type {any}
	 */
	export let props;

	let sliderPosition = null;
	let slideWidth = 330;
	let slideGap = 16;
	let sliderRef;
	let currentSlide;
	let colorState;

	$: {
		currentSlide = Math.round(sliderPosition / (slideWidth + slideGap));
	}

	const scrollToSlide = (slider, slideIndex) => {
		if (!slider) return;
		slider.scrollTo({
			left: slideIndex * (slideWidth + slideGap),
			behavior: 'smooth'
		});
	};

	let viewWidth;
</script>

<svelte:window bind:innerWidth={viewWidth} />
<div class="h-[500px] overflow-hidden flex flex-col lg:items-center">
	<ul
		bind:this={sliderRef}
		on:scroll={(e) => {
			sliderPosition = e.currentTarget.scrollLeft;
		}}
		class="flex h-[540px] overflow-x-auto snap-x snap-mandatory"
	>
		{#each props as props}
			<li class="snap-start snap-always mr-4 last:mr-0">
				<div class="flex flex-col gap-12 w-[330px] h-[450px] p-6 {props.gradient}-gradient">
					<div class="flex gap-2 items-center">
						<img class="h-[33px] w-auto" src={props.icon} alt="icon" />
						<div class="text-3xl text-white">{props.title}</div>
					</div>
					<div class="flex flex-col custom-blur py-8 px-6 gap-6">
						<div class="text-2xl text-white">{props.subTitle}</div>
						<div class="text-white">{props.description}</div>

						<a class="flex gap-1 text-white hover:underline" href={props.link}>
							Read case study
							<img src={ArrowIcon} alt="icon" />
						</a>
					</div>
				</div>
			</li>
		{/each}
	</ul>
	{#if viewWidth < 1023}
		<div class="flex gap-5">
			<button
				on:click={() => {
					scrollToSlide(sliderRef, currentSlide - 1);
				}}
				on:mouseenter={() => {
					colorState = `stroke-orange-400`;
				}}
				on:mouseleave={() => {
					colorState = `stroke-[#FF550D]`;
				}}
				class="disabled:border-gray-400 flex items-center justify-center border-2 w-8 h-8 border-primary rounded-full hover:border-orange-400"
			>
				<span class="sr-only">Previous slide</span>
				<!-- <img src={ChevronLeft} alt="chevron left" /> -->
				<svg
					width="8"
					height="14"
					viewBox="0 0 8 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						class={colorState}
						d="M7 13L1 7L7 1"
						stroke="#FF550D"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
			<button
				on:click={() => {
					scrollToSlide(sliderRef, currentSlide + 1);
				}}
				on:mouseenter={() => {
					colorState = `stroke-orange-400`;
				}}
				on:mouseleave={() => {
					colorState = `stroke-[#FF550D]`;
				}}
				class="flex items-center justify-center border-2 w-8 h-8 border-primary rounded-full hover:border-orange-400"
			>
				<span class="sr-only">Next slide</span>
				<!-- <img src={ChevronRight} alt="chevron right" /> -->
				<svg
					width="8"
					height="14"
					viewBox="0 0 8 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						class={colorState}
						d="M1 13L7 7L1 1"
						stroke="#FF550D"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</div>
	{/if}
</div>

<style>
	.green-gradient {
		background: linear-gradient(340deg, #055833 0%, rgba(12, 236, 135, 0.92) 100%);
	}
	.orange-gradient {
		background: linear-gradient(233deg, rgba(255, 116, 56, 0.69) 0%, #ff4c00 100%);
	}
	.blue-gradient {
		background: linear-gradient(201deg, #1d2939 0%, rgba(43, 59, 80, 0.83) 100%);
	}
	.custom-blur {
		border: 1px solid rgba(255, 255, 255, 0.5);
		background: rgba(255, 255, 255, 0.3);

		/* Background blur / lg */
		backdrop-filter: blur(12px);
	}
</style>
