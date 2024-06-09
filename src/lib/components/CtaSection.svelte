<script>
	// @ts-nocheck

	import extractFormDataUtil from '$lib/util/extractFormDataUtil';
	import toast, { Toaster } from 'svelte-french-toast';
	let form;
</script>

<Toaster />
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
			bind:this={form}
			class="flex flex-col gap-4 md:flex md:flex-row"
			on:submit|preventDefault={async (e) => {
				const formData = extractFormDataUtil(e);

				const response = await fetch('../../api/postUserEmail', {
					method: 'POST',
					body: JSON.stringify(formData),
					headers: {
						'Content-Type': 'application/json'
					}
				});

				const { statusText } = await response.json();

				if (statusText == 'Created') {
					toast.success('Form submitted successfully.');
				} else {
					toast.error('There was an issue');
				}

				console.log(formData);
				form.reset();
				return console.log(statusText);
			}}
		>
			<input
				type="email"
				name="email"
				placeholder="Enter your email"
				class="input input-bordered"
			/>
			<button type="submit" class="btn btn-primary normal-case">Subscribe</button>
		</form>
	</div>
</div>
