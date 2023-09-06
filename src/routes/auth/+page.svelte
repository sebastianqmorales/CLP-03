<div class="flex flex-col justify-center gap-10 h-screen">
	<div class="text-xl self-center">Protected route please login</div>
	<form action="?/login" method="POST" class="flex flex-col gap-2 md:w-1/4 self-center">
		<input type="text" name="email" placeholder="email" class="input input-bordered w-full" />
		<input
			type="password"
			name="password"
			placeholder="password"
			class="input input-bordered w-full"
		/>
		<button class="btn btn-primary" type="submit">Login</button>
	</form>
</div>
