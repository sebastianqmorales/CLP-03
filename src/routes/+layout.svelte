<script>
	import '../app.css';
	import Navbar from '$lib/navigation/Navbar.svelte';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<Navbar />
<slot />
<Footer />
