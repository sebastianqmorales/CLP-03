<script>
	/**
	 * @type {any}
	 */
	export let props;

	import ArrowRight from '$lib/assets/arrow-right.svg';
</script>

{#each props as props}
	<div class="flex items-start gap-4">
		<img class="w-10 h-auto lg:w-20" src={props.icon} alt="icon" />
		<div class="flex flex-col gap-2">
			<div class="text-xl font-semibold">{props.title}</div>
			<div class="text-secondary-content lg:text-lg">
				{props.description}
			</div>
			<a
				href={props.link}
				class="text-secondary flex items-center font-semibold gap-2 hover:underline"
				>Learn more<img src={ArrowRight} alt="icon" class="pt-1" /></a
			>
		</div>
	</div>
{/each}
