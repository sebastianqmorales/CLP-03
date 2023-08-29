<script>
	import FullLogoWhite from '../assets/fullLogoLightMode.svg';
</script>

<div data-theme="dark">
	<div class="flex flex-col px-3 py-10 gap-8 bg-base-100">
		<div class="flex flex-col gap-2">
			<div class="text-3xl text-white">Get notified when we launch</div>
			<div class="text-secondary-content">
				Stay up to date with the latest news, announcements, and articles.
			</div>
		</div>
		<div class="flex flex-col gap-4">
			<input type="text" placeholder="Enter your email" class="input input-bordered" />
			<div class="btn btn-primary normal-case text-lg">Subscribe</div>
		</div>
	</div>
	<div class="flex flex-col px-3 py-10 gap-4 bg-base-200">
		<img class="w-[100px] h-auto" src={FullLogoWhite} alt="Cuatex" />
		<div class="flex justify-between px-2">
			<div class="flex flex-col gap-4 text-white text-lg">
				<a href="/">Home</a>
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
			</div>
			<div class="flex flex-col gap-4 text-white text-lg">
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
