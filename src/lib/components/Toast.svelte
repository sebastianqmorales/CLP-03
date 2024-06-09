<script>
	// @ts-nocheck
	import { fade } from 'svelte/transition';
	export let props;
</script>

{#if props}
	<!-- toast component -->
	<div out:fade={{ delay: 250, duration: 300 }} class="toast toast-top toast-center">
		<div class="alert alert-success">
			<span>Form sent successfully </span>
		</div>
	</div>

	<!-- {:else}
	<div out:fade={{ delay: 250, duration: 300 }} class="toast toast-top toast-center">
		<div class="alert alert-error">
			<span>There was an issue </span>
		</div>
	</div> -->
{/if}
