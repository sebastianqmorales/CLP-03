<script>
	// @ts-nocheck

	import extractFormDataUtil from '$lib/util/extractFormDataUtil';
	import { onMount } from 'svelte';
	import toast, { Toaster } from 'svelte-french-toast';

	let form;
</script>

<Toaster />
<div
	class="flex flex-col max-w-2xl mx-auto my-5 px-3 py-6 sm:p-10 md:px-10
	md:py-20 justify-center gap-10 sm:gap-20 xl:gap-28 bg-gradient-to-b from-base-200 to-base-100"
>
	<div class="flex flex-col items-center gap-5 sm:px-10">
		<div class="flex flex-col items-center gap-1">
			<div class="text-primary">Become an early adopter</div>
			<h1 class="text-4xl">Join our Beta</h1>
		</div>
		<div class="text-secondary-content text-center">
			Claim your username, start off with money in your account, have an impact on the product.
		</div>
	</div>

	<form
		bind:this={form}
		class="flex flex-col gap-8"
		on:submit|preventDefault={async (e) => {
			const formData = extractFormDataUtil(e);

			const response = await fetch('../api/postUserForm', {
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

			form.reset();
			return console.log(statusText);
		}}
	>
		<div class="flex flex-col">
			<label for="username">Reserve your username</label>
			<input
				name="username"
				type="text"
				required
				class="input border-base-300 rounded-none"
				placeholder="Username"
			/>
		</div>
		<div class="flex flex-col">
			<label for="email">Email</label>
			<input
				name="email"
				type="email"
				required
				class="input border-base-300 rounded-none"
				placeholder="you@company.com"
			/>
		</div>
		<div class="flex flex-col gap-1">
			<div class="text">
				What type of customer are you? <span class="text-secondary-content text-sm"
					>This does not have an effect on your account.</span
				>
			</div>
			<div class="join flex-col sm:flex-row gap-3 max-w-[130px]">
				<input
					class="join-item btn normal-case rounded-none"
					type="radio"
					name="usertype"
					value="audience-user-type"
					aria-label="Audience"
					checked
				/>
				<input
					class="join-item btn normal-case rounded-none"
					type="radio"
					name="usertype"
					value="creator-user-type"
					aria-label="Creator"
				/>
				<input
					class="join-item btn normal-case rounded-none"
					type="radio"
					name="usertype"
					value="b2b-user-type"
					aria-label="B2B"
				/>
			</div>
		</div>
		<div class="flex flex-col">
			<label for="message">Message</label>
			<textarea
				name="message"
				class="textarea border-base-300 rounded-none"
				rows="4"
				placeholder="Give us some feedback..."
				type="text"
			/>
		</div>

		<div class="flex gap-4 items-center">
			<input
				type="checkbox"
				class="checkbox rounded-sm checkbox-sm"
				name="privacy-policy"
				required
			/>
			<label for="privacy-policy" class="text-secondary-content">
				You agree to our Data Dignity <a href="/" class="text-primary underline">privacy policy</a>
			</label>
		</div>
		<button
			type="submit"
			class="mt-12 btn btn-primary rounded-none normal-case md:w-[400px] md:self-center"
			>Submit</button
		>
	</form>
</div>
