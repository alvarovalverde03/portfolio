<script lang="ts">
    import * as config from '$lib/config';
	import Nav from './components/nav.svelte';
</script>

<header>
	<Nav />
	<h1>{config.title}</h1>
</header>

<style>
</style>