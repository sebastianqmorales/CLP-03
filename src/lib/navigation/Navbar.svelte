<script>
	// @ts-nocheck

	import Dropdown from './Dropdown.svelte';
	import FullLogoWhite from '../assets/fullLogoLightMode.svg';
	import FullLogoBlack from '../assets/fullLogoDarkMode.svg';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
	});
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

<div class="flex justify-between items-center md:px-10 md:py-4">
	<div class="flex gap-4 md:gap-7 items-center">
		<img alt="icon" src={FullLogoWhite} />

		<div class="">Home</div>
		<Dropdown {props} />
		<div class="">Blog</div>
	</div>
	<div class="form-control">
		<label class="cursor-pointer label gap-4">
			<span class="label-text">Light mode</span>
			<input
				data-toggle-theme="dark,light"
				data-act-class="ACTIVECLASS"
				type="checkbox"
				class="toggle toggle-sm"
				checked
			/>
			<span class="label-text">Dark mode</span>
		</label>
	</div>
	<div class="btn btn-primary">Sign up</div>
</div>
