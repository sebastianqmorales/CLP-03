<script>
	import FeatureCard from '$lib/components/FeatureCard.svelte';
	import CommentCards from '$lib/components/CommentCards.svelte';
	import surveillanceIcon from '$lib/assets/surveillance-icon.svg';
	import moderationIcon from '$lib/assets/moderation-icon.svg';
	import commentsIcon from '$lib/assets/comments-icon.svg';

	let props = [
		{
			title: 'Challenge surveillance capitalism',
			description:
				'Because you are spending money on the platform, we do not need to sell your data as a product to advertising organizations. You can be the first in the movement of Data dignity, owning your data and having the option of opting-into our Data Union Program.',
			icon: surveillanceIcon,
			link: '/'
		},
		{
			title: 'Earn from moderation',
			description:
				'Moderation is very valuable data that can be sold to AI language model companies, sentiment analysis organizations and more. If you opt-into our Data Union Program, you can earn money from this vital data you’ve produced.',
			icon: moderationIcon,
			link: '/'
		},
		{
			title: 'Earn money from comments',
			description:
				'Each upvote is worth half a cent, earn a respectable amount from your popular, intriguing or informative comments. Also producing valuable data on what people find most worthy of an upvote. ',
			icon: commentsIcon,
			link: '/'
		}
	];
</script>

<div class="flex flex-col px-3 pt-10 gap-12">
	<div class="flex flex-col gap-4 lg:w-[700px] lg:pl-[68px]">
		<div>
			<div class="sub-text text-secondary">The difference</div>
			<div class="text-4xl font-semibold">The first Data Dignity Platform</div>
		</div>
		<div class="text-secondary-content lg:text-lg">
			Your data is valuable. It drives the billion dollar internet economy. We are the first social
			content platform to give you access to make money from this market. Enabling privacy, earning
			you money, and creating a higher quality, user owned internet.
		</div>
	</div>
	<div class="flex flex-col md:flex md:flex-row items-center py-10 gap-40">
		<div class="flex flex-col gap-12 px-2 md:gap-10 md:px-10 md:basis-1/2">
			<FeatureCard {props} />
		</div>
		<div
			class="flex flex-col gap-3 md:gap-8 opposite-theme md:basis-1/2 h-[500px] md:h-[500px] w-full justify-center px-3 md:px-12 overflow-visible"
		>
			<CommentCards />
		</div>
	</div>
</div>
