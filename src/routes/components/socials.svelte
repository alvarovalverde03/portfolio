<script>
	import GitHubIcon from "$lib/icons/GitHubIcon.svelte";
	import LinkedInIcon from "$lib/icons/LinkedInIcon.svelte";
</script>

<div class="socials">
    <a href="https://www.linkedin.com/in/alvarovalverdeblanco/" target="_blank" rel="noopener nofollow">
        <LinkedInIcon />
	</a>
    <a href="https://github.com/alvarovalverde03" target="_blank" rel="noopener nofollow">
        <GitHubIcon />
	</a>
</div>

<style>
    .socials {
		display: flex;
		gap: 2rem;
	}

	.socials a:hover {
		opacity: 0.8;
	}
</style>