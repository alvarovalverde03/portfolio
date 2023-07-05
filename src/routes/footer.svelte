<script lang="ts">
	import * as config from '$lib/config';
	import Button from './components/button.svelte';
</script>

<footer>
	<p>{config.title} &copy {new Date().getFullYear()}</p>
	<Button text='Download CV' />
</footer>

<style>
	footer {
		padding-block: 1rem;
		border-top: 1px solid var(--clr-primary);

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}

	p {
		color: var(--clr-primary);
	}
</style>