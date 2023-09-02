<div data-theme="dark">
	<div
		class="px-3 py-10 gap-8 bg-base-100 flex flex-col md:flex md:flex-row md:justify-between md:items-center lg:w-[1000px] lg:mx-auto lg:py-20"
	>
		<div class="flex flex-col gap-2">
			<div class="text-3xl text-white">Sign up for our Beta</div>
			<div class="text-secondary-content lg:text-lg">
				Join over <span class="text-secondary">313</span> users who want to challenge the status quo.
			</div>
		</div>
		<form
			class="flex flex-col gap-4 md:flex md:flex-row"
			name="email"
			method="POST"
			data-netlify="true"
			action="/success"
		>
			<input type="hidden" name="form-name" value="email" />
			<input
				type="text"
				name="email"
				id="email"
				placeholder="Enter your email"
				class="input input-bordered"
			/>
			<input class="btn btn-primary normal-case" value="Submit" type="submit" />
		</form>
	</div>
</div>
