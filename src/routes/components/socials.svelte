<script lang="ts">
	import EmailIcon from "$lib/icons/EmailIcon.svelte"
	import GitHubIcon from "$lib/icons/GitHubIcon.svelte"
	import LinkedInIcon from "$lib/icons/LinkedInIcon.svelte"

	const emailText = 'alvarovalverdeblanco@gmail.com'
</script>

<div class="socials">
    <a href="https://www.linkedin.com/in/alvarovalverdeblanco/" target="_blank" rel="noopener nofollow">
        <LinkedInIcon />
	</a>
    <a href="https://github.com/alvarovalverde03" target="_blank" rel="noopener nofollow">
        <GitHubIcon />
	</a>
	<a href={`mailto:${emailText}`} target="_blank">
		<EmailIcon />
	</a>
</div>

<style>
    .socials {
		display: flex;
		gap: 2rem;
	}
</style>