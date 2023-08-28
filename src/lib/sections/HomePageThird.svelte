<script>
	import GradientCards from '$lib/components/GradientCards.svelte';
	import NewGradientCards from '$lib/components/NewGradientCards.svelte';
	import MoneyIcon from '$lib/assets/dollar-icon.svg';
	import EyeIcon from '$lib/assets/eye-off.svg';
	import AlgoIcon from '$lib/assets/algo-icon.svg';

	let condition = false;

	let props = [
		{
			title: 'Earn Money',
			gradient: 'green',
			icon: MoneyIcon,
			subTitle: 'Microtransactions',
			description:
				"Our business model allows you to earn endless amounts from your comments, content and data. Even if you don't post content, you can still earn at a profit.",
			link: '/'
		},
		{
			title: 'Kill Big Brother',
			gradient: 'orange',
			icon: EyeIcon,
			subTitle: 'End survaliance',
			description:
				'Cuatex is aimed at giving users complete autonomy over their data. Allowing users to end the cycle of corporate manipulation while also giving them new economic opportunities.',
			link: '/'
		},
		{
			title: 'Own the platform',
			gradient: 'blue',
			icon: AlgoIcon,
			subTitle: 'Algorithmic control',
			description:
				'Our platform works with algorithms you create via our simplistic yet powerful Feed Builder. User control is engineered into our algorithms, voting and moderation features.',
			link: '/'
		}
		// {
		// 	title: 'Own the platform',
		// 	gradient: 'blue',
		// 	icon: AlgoIcon,
		// 	subTitle: 'Algorithmic control',
		// 	description:
		// 		'Our platform works with algorithms you create via our simplistic yet powerful Feed Builder. User control is engineered into our algorithms, voting and moderation features.',
		// 	link: '/'
		// },
		// {
		// 	title: 'Own the platform',
		// 	gradient: 'blue',
		// 	icon: AlgoIcon,
		// 	subTitle: 'Algorithmic control',
		// 	description:
		// 		'Our platform works with algorithms you create via our simplistic yet powerful Feed Builder. User control is engineered into our algorithms, voting and moderation features.',
		// 	link: '/'
		// }
	];
</script>

<div class="px-3 py-10 flex flex-col md:flex md:flex-row md:justify-between">
	<div class="flex flex-col gap-3 mb-3 md:w-[400px]">
		<div class="text-4xl font-semibold">Not just another social media platform.</div>
		<div>
			Our product has compounding value. Each feature builds off the next, all starting from our
			business model.
		</div>
	</div>

	<div class="btn btn-primary normal-case">Create account</div>
</div>

<div class="px-3 py-6">
	<NewGradientCards {props} />
</div>
