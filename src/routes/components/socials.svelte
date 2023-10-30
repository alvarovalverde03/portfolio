<script lang="ts">
	import EmailIcon from "$lib/icons/EmailIcon.svelte"
	import GitHubIcon from "$lib/icons/GitHubIcon.svelte"
	import LinkedInIcon from "$lib/icons/LinkedInIcon.svelte"

	const emailText = 'alvarovalverdeblanco@gmail.com'

	function copyToClippboard(event: MouseEvent) {
		navigator.clipboard.writeText(emailText)

		const button = event.currentTarget as HTMLButtonElement
    	const tooltip = button.querySelector('.tooltip') as HTMLDivElement
		if (!tooltip) return

		tooltip.classList.remove('hide')
		button.style.transform = 'translateY(-0.3rem)'
	
		setTimeout(() => {
			tooltip.classList.add('hide')
		button.style.transform = 'translateY(0rem)'
		}, 1000)
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
		<EmailIcon />
		<div class="tooltip hide">
			<span>Copied!</span>
		</div>
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
		position: relative;
		transition: transform 0.3s ease;
	}

	button .tooltip {
		opacity: 1;
		position: absolute;
		top: -3.6rem;
		left: -1.7rem;
		color: var(--clr-txt);
		background: var(--clr-bg-2);
		border-radius: 4px;
		font-size: 1.8rem;
		padding: 0.8rem 1.2rem;
		text-wrap: nowrap;
		transition: opacity 0.3s ease;
	}

	button .tooltip.hide {
		opacity: 0;
	}
</style>