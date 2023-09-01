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
				<a class="hover:underline" href="/">Audiences</a>
				<a class="hover:underline" href="/">Creators</a>
				<a class="hover:underline" href="/">B2B</a>
			</div>
			<div class="flex flex-col gap-1">
				<div class="text-base text-secondary-content">Resources</div>
				<a class="hover:underline" href="/">About Us</a>
				<a class="hover:underline" href="/">Mission</a>
				<a class="hover:underline" href="/">Press</a>
			</div>
			<div class="flex flex-col gap-1">
				<div class="text-base text-secondary-content">Company</div>
				<a class="hover:underline" href="/">Blog</a>
				<a class="hover:underline" href="/">Platform</a>
				<a class="hover:underline" href="/">Sign up</a>
			</div>
		</div>

		<div class="divider" />
		<div class="text-secondary-content self-center">
			© {new Date().getFullYear()} Cuatex. All rights reserverd.
		</div>
	</div>
</div>
