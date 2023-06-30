<script lang="ts">
	import * as config from '$lib/config';
</script>

<footer>
	<p>{config.title} &copy {new Date().getFullYear()}</p>
</footer>

<style>
	footer {
		padding-block: 1rem;
		border-top: 1px solid var(--clr-primary);
	}

	p {
		color: var(--clr-primary);
	}
</style>