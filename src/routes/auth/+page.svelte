<div class="flex flex-col justify-center gap-10 h-full px-10 py-20 md:px-12 md:py-40 lg:px-20">
	<div class="text-xl self-center">Protected route please login</div>
	<form
		action="?/login"
		method="POST"
		class="flex flex-col gap-2 w-full md:w-1/2 lg:w-1/4 self-center"
	>
		<input
			type="text"
			name="email"
			placeholder="email"
			class="input input-bordered w-full rounded-none"
		/>
		<input
			type="password"
			name="password"
			placeholder="password"
			class="input input-bordered w-full rounded-none"
		/>
		<button class="btn btn-primary normal-case rounded-none" type="submit">Login</button>
		<a href="/" class="btn btn-neutral normal-case rounded-none">Back to home page</a>
	</form>
</div>
