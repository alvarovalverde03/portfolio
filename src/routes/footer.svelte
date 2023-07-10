<script lang="ts">
	import * as config from '$lib/config';
	import Button from './components/button.svelte';
	import Socials from './components/socials.svelte';
</script>

<footer>
	<p>{config.title} - {new Date().getFullYear()}</p>
	
	<Socials />
	
	<Button text='Download CV' url="/" />
</footer>

<style>
	footer {
		padding: 1rem 0;
		border-top: 1px solid var(--clr-primary);

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	p {
		color: var(--clr-primary);
	}

	@media (max-width: 768px) {
		footer {
			flex-direction: column-reverse;
			align-items: center;
			gap: 1.5rem;
			padding-top: 3rem;
		}
	}
</style>