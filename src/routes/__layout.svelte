<script>
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';

	import '../app.css';
</script>

<main class="">
	<Navbar />
	<slot />
	<Footer />
</main>
