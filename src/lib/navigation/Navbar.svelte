<script>
	// @ts-nocheck

	import Dropdown from './Dropdown.svelte';
	import FullLogoWhite from '../assets/fullLogoLightMode.svg';
	import DataIcon from '../assets/data-icon.svg';
	import UserIcon from '../assets/user-icon.svg';
	import MissionIcon from '../assets/mission-icon-real.svg';
	import AboutUsIcon from '../assets/mission-icon.svg';
	import PressIcon from '../assets/press-icon.svg';
	import CreatorIcon from '../assets/creator-icon.svg';
	import DarkMode from './darkMode.svelte';

	let props = [
		{
			title: 'Users',
			dropDownItems: [
				{
					icon: UserIcon,
					title: 'Audiences',
					link: 'users',
					subDescription: 'Users who watch, read or listen to content. '
				},
				{
					icon: CreatorIcon,
					link: 'creators',
					title: 'Creators',
					subDescription: 'For those who want to post their content on Cuatex. '
				},
				{
					icon: DataIcon,
					link: 'b2b',
					title: 'B2B',
					subDescription: 'Users or organizations who want to buy data.'
				}
			]
		},
		{
			title: 'Resources',
			dropDownItems: [
				{
					icon: AboutUsIcon,
					title: 'About us',
					link: 'about-us',
					subDescription: 'Understand what we do, who we are and our tech.'
				},
				{
					icon: MissionIcon,
					link: 'mission',
					title: 'Mission',
					subDescription: 'Find out what we are striving for at Cuatex.'
				},
				{
					icon: PressIcon,
					link: 'press',
					title: 'Press',
					subDescription: 'Logos, quotes and more for press.'
				}
			]
		}
	];
</script>

<div class="flex justify-between items-center md:px-10 md:py-4">
	<div class="flex gap-4 md:gap-7 items-center">
		<a href="/">
			<img alt="icon" src={FullLogoWhite} />
		</a>
		<a class="" href="/">Home</a>
		<Dropdown {props} />
		<a class="" href="/platform">Platform</a>
		<a class="" href="/blog">Blog</a>
	</div>

	<div class="flex gap-5">
		<DarkMode />
		<div class="btn btn-primary">Sign up</div>
	</div>
</div>
