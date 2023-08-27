<script>
	import ArrowIcon from '$lib/assets/arrow-up-right.svg';
	import MoneyIcon from '$lib/assets/dollar-icon.svg';
	import EyeIcon from '$lib/assets/eye-off.svg';
	import AlgoIcon from '$lib/assets/algo-icon.svg';
</script>

<div class="flex gap-6 py-10 px-3 overflow-x-auto snap-x snap-mandatory">
	<div class="flex flex-col p-6 green-gradient w-[300px] h-[450px] gap-8 snap-start snap-always">
		<div class="flex items-center">
			<img class="h-[40px] w-auto" src={MoneyIcon} alt="icon" />
			<div class="text-3xl text-white font-semibold">Earn Money</div>
		</div>
		<div class="flex flex-col gap-8 py-8 px-6 green-blur hover:shadow-2xl h-[330px] w-auto">
			<div class="text-2xl text-white font-semibold">Microtransactions</div>
			<div class="text-white">
				Our business model allows you to earn endless amounts from your comments, content and data.
				Even if you don't post content, you can still earn at a profit.
			</div>
			<div class="flex">
				<a href="/" class="font-semibold text-white hover:underline">Read case study</a>
				<img src={ArrowIcon} alt="icon" />
			</div>
		</div>
	</div>
	<div class="flex flex-col p-6 orange-gradient w-[300px] h-[450px] gap-8 snap-start snap-always">
		<div class="flex items-center">
			<img class="h-[40px] w-auto" src={EyeIcon} alt="icon" />
			<div class="text-3xl text-white font-semibold">Kill Big Brother</div>
		</div>
		<div class="flex flex-col gap-8 py-8 px-6 orange-blur hover:shadow-2xl h-[330px] w-auto">
			<div class="text-2xl text-white font-semibold">End survaliance</div>
			<div class="text-white">
				Cuatex is aimed at giving users complete autonomy over their data. Allowing users to end the
				cycle of corporate manipulation while also giving them new economic opportunities.
			</div>
			<div class="flex">
				<a href="/" class="font-semibold text-white hover:underline">Read case study</a>
				<img src={ArrowIcon} alt="icon" />
			</div>
		</div>
	</div>
	<div class="flex flex-col p-6 blue-gradient w-[300px] h-[450px] gap-8 snap-start snap-always">
		<div class="flex items-center">
			<img class="h-[40px] w-auto" src={AlgoIcon} alt="icon" />
			<div class="text-3xl text-white font-semibold">Own the platform</div>
		</div>
		<div class="flex flex-col gap-8 py-8 px-6 blue-blur hover:shadow-2xl h-[330px] w-auto">
			<div class="text-2xl text-white font-semibold">Algorithmic control</div>
			<div class="text-white">
				Our platform works with algorithms you create via our simplistic yet powerful Feed Builder.
				User control is engineered into our algorithms, voting and moderation features.
			</div>
			<div class="flex">
				<a href="/" class="font-semibold text-white hover:underline">Read case study</a>
				<img src={ArrowIcon} alt="icon" />
			</div>
		</div>
	</div>
</div>

<style>
	.green-gradient {
		background: linear-gradient(340deg, #055833 0%, rgba(12, 236, 135, 0.92) 100%);
	}
	.green-blur {
		border: 1px solid rgba(255, 255, 255, 0.5);
		background: rgba(255, 255, 255, 0.3);

		/* Background blur / lg */
		backdrop-filter: blur(12px);
	}

	.orange-gradient {
		background: linear-gradient(233deg, rgba(255, 116, 56, 0.69) 0%, #ff4c00 100%);
	}
	.orange-blur {
		border: 1px solid rgba(255, 255, 255, 0.5);
		background: rgba(255, 255, 255, 0.3);

		/* Background blur / lg */
		backdrop-filter: blur(12px);
	}

	.blue-gradient {
		background: linear-gradient(201deg, #1d2939 0%, rgba(43, 59, 80, 0.83) 100%);
	}
	.blue-blur {
		border: 1px solid rgba(255, 255, 255, 0.5);
		background: rgba(255, 255, 255, 0.3);

		/* Background blur / lg */
		backdrop-filter: blur(12px);
	}
</style>
