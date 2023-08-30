<script>
	import FullLogoWhite from '../assets/fullLogoLightMode.svg';
</script>

<div data-theme="dark">
	<div class="flex flex-col px-3 py-10 gap-4 bg-base-200">
		<a href="/" class="md:self-center">
			<img class="w-[100px] h-auto" src={FullLogoWhite} alt="Cuatex" />
		</a>
		<div
			class="flex flex-col gap-6 md:flex md:flex-row md:justify-evenly lg:w-[800px] lg:self-center text-white text-lg"
		>
			<div class="flex flex-col gap-1">
				<div class="text-base text-secondary-content">Users</div>
				<a href="/">Audiences</a>
				<a href="/">Creators</a>
				<a href="/">B2B</a>
			</div>
			<div class="flex flex-col">
				<div class="text-base text-secondary-content">Resources</div>
				<a href="/">About Us</a>
				<a href="/">Mission</a>
				<a href="/">Press</a>
			</div>
			<div class="flex flex-col">
				<div class="text-base text-secondary-content">Company</div>
				<a href="/">Blog</a>
				<a href="/">Platform</a>
				<a href="/">Sign up</a>
			</div>
		</div>

		<div class="divider" />
		<div class="text-secondary-content self-center">
			© {new Date().getFullYear()} Cuatex. All rights reserverd.
		</div>
	</div>
</div>
