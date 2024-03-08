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

	let windowWidth;

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

	let dropdown;

	// onMount(async () => {
	// 	const handleClick = (event) => {
	// 		if (!dropdown.contains(event.target)) {
	// 			dropdown.removeAttribute('open');
	// 		}
	// 	};
	// 	document.addEventListener('click', handleClick, false);

	// 	return () => {
	// 		document.removeEventListener('click', handleClick, false);
	// 	};
	// });

	let isItOpen = false;
</script>

<svelte:window bind:innerWidth={windowWidth} />
{#if windowWidth > 767}
	<div class="flex justify-between items-center md:px-10 md:pt-4 md:pb-1 max-w-7xl mx-auto">
		<div class="flex gap-4 md:gap-7 items-center">
			<a href="/">
				<img alt="Cuatex" src={FullLogoWhite} />
			</a>
			<!-- <Dropdown {props} /> -->
			<!-- <a class="" href="/platform">Platform</a> -->
			<a
				class="transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:text-orange-500 duration-300"
				href="/blog">Blog</a
			>
		</div>

		<div class="flex gap-5">
			<DarkMode />
			<a href="/sign-up" class="btn btn-primary rounded-none normal-case">Sign up for free</a>
		</div>
	</div>
{:else if windowWidth > 640}
	<div class="flex justify-between items-center px-2 py-1">
		<div class="flex gap-4 md:gap-7 items-center">
			<a href="/">
				<img alt="Cuatex" src={FullLogoWhite} />
			</a>
		</div>

		<div class="flex gap-5">
			<label class="swap swap-rotate">
				<!-- this hidden checkbox controls the state -->
				<input
					on:click={() => {
						isItOpen = !isItOpen;
					}}
					type="checkbox"
				/>

				<!-- hamburger icon -->
				<svg
					class="swap-off fill-current"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 512 512"
					><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg
				>

				<!-- close icon -->
				<svg
					class="swap-on fill-current"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 512 512"
					><polygon
						points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
					/></svg
				>
			</label>

			{#if isItOpen}
				<div
					class="w-[100vw] h-auto bg-base-200 absolute top-12 right-0 flex flex-col px-1 py-2 gap-2"
				>
					<!-- <Dropdown {props} /> -->
					<!-- <a class="" href="/platform">Platform</a> -->
					<a class="" href="/blog">Blog</a>
				</div>
			{/if}
			<DarkMode />
			<a href="sign-up" class="btn btn-primary normal-case">Sign up</a>
		</div>
	</div>
{:else}
	<div class="flex justify-between items-center px-2">
		<div class="flex gap-4 md:gap-7 items-center">
			<a href="/">
				<img alt="Cuatex" src={FullLogoWhite} />
			</a>
		</div>

		<div class="flex gap-5">
			<label class="swap swap-rotate">
				<!-- this hidden checkbox controls the state -->
				<input
					on:click={() => {
						isItOpen = !isItOpen;
					}}
					type="checkbox"
				/>

				<!-- hamburger icon -->
				<svg
					class="swap-off fill-current"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 512 512"
					><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg
				>

				<!-- close icon -->
				<svg
					class="swap-on fill-current"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 512 512"
					><polygon
						points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
					/></svg
				>
			</label>

			{#if isItOpen}
				<div
					class="w-[100vw] h-auto bg-base-200 absolute top-12 right-0 flex flex-col px-1 py-2 gap-2 z-20"
				>
					<!-- <Dropdown {props} /> -->
					<!-- <a class="font-semibold text-lg md:font-normal md:text-base" href="/platform">Platform</a> -->
					<a class="font-semibold text-lg md:font-normal md:text-base" href="/blog">Blog</a>
					<a href="sign-up" class="btn btn-primary normal-case">Sign up for free</a>
				</div>
			{/if}
			<DarkMode />
		</div>
	</div>
{/if}
