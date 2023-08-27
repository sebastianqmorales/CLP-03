<script>
	/**
	 * @type {any}
	 */
	export let props;

	import ArrowIcon from '$lib/assets/arrow-up-right.svg';
</script>

<div class="h-[500px] overflow-hidden">
	<ul class="flex h-[540px] gap-4 px-3 overflow-x-auto snap-x snap-mandatory">
		{#each props as props}
			<li class="snap-center snap-always">
				<div class="flex flex-col gap-8 w-[330px] h-[450px] p-6 {props.gradient}-gradient">
					<div class="flex gap-2 items-center">
						<img class="h-[33px] w-auto" src={props.icon} alt="icon" />
						<div class="text-3xl text-white">{props.title}</div>
					</div>
					<div class="flex flex-col custom-blur py-8 px-6 gap-4">
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
