<script lang="ts">
	import EmailIcon from "$lib/icons/EmailIcon.svelte"
	import GitHubIcon from "$lib/icons/GitHubIcon.svelte"
	import LinkedInIcon from "$lib/icons/LinkedInIcon.svelte"
	import Tooltip from "./tooltip.svelte";

	const emailText = 'alvarovalverdeblanco@gmail.com'
	const tooltipTimeout = 1000
	let tooltipText = 'Copy email'

	function copyToClippboard(event: MouseEvent) {
		navigator.clipboard.writeText(emailText)

		const button = event.currentTarget as HTMLButtonElement

		tooltipText = 'Copied!'
		button.style.transform = 'translateY(-0.3rem)'
	
		setTimeout(() => {
			tooltipText = 'Copy email'
			button.style.transform = 'translateY(0rem)'
		}, tooltipTimeout)
	}
</script>

<div class="socials">
    <a href="https://www.linkedin.com/in/alvarovalverdeblanco/" target="_blank" rel="noopener nofollow">
        <LinkedInIcon />
	</a>
    <a href="https://github.com/alvarovalverde03" target="_blank" rel="noopener nofollow">
        <GitHubIcon />
	</a>
	<button on:click={copyToClippboard}>
		<Tooltip text={tooltipText}>
			<EmailIcon />
		</Tooltip>
	</button>
</div>

<style>
    .socials {
		display: flex;
		gap: 2rem;
	}

	.socials button {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		margin: 0;
		position: relative;
		transition: transform 0.3s ease;
	}
</style>