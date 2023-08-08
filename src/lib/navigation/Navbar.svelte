<script>
	import Dropdown from './Dropdown.svelte';
	import FullLogo from '../assets/fullLogo.svg';
	let props = [
		{
			title: 'Users',
			dropDownItems: [
				{
					icon: '',
					title: 'Audiences',
					subDescription: 'For users who watch, read or listen to content.'
				},
				{
					icon: '',
					title: 'Creators',
					subDescription: 'For users who watch, read or listen to content.'
				},
				{
					icon: '',
					title: 'B2B',
					subDescription: 'For users who watch, read or listen to content.'
				}
			]
		},
		{
			title: 'Resources',
			dropDownItems: [
				{
					icon: '',
					title: 'About us',
					subDescription: 'For users who watch, read or listen to content.'
				},
				{
					icon: '',
					title: 'Mission',
					subDescription: 'For users who watch, read or listen to content.'
				},
				{
					icon: '',
					title: 'Press',
					subDescription: 'For users who watch, read or listen to content.'
				}
			]
		}
	];
</script>

<div class="flex justify-between items-center bg-[#1D2939] md:px-10 md:py-4">
	<div class="flex gap-4 md:gap-7 items-center">
		<img alt="icon" src={FullLogo} />
		<div class="text-white">Home</div>
		<Dropdown {props} />
		<div class="text-white">Blog</div>
	</div>
	<div class="button">Sign up</div>
</div>
