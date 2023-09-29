<script lang="ts">
    import { browser } from '$app/environment'

    type Themes = { name: keyof typeof themes }

    const themes = {
        'dark': { name: 'dark' }, 
        'light': { name: 'light' }
    }

    let selectedTheme = getTheme() ?? themes['dark']

    function getTheme() {
		if (!browser) return

		const htmlElement = document.documentElement
		const userTheme:keyof typeof themes = String(localStorage.theme) as keyof typeof themes
		const prefersDarkMode = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches
		const prefersLightMode = window.matchMedia(
			'(prefers-color-scheme: light)'
		).matches

		// check if the user set a theme
		if (userTheme) {
			htmlElement.dataset.theme = userTheme
			return themes[userTheme]
		}

		// otherwise check for user preference
		if (!userTheme && prefersDarkMode) {
			htmlElement.dataset.theme = 'dark'
			localStorage.setItem('theme', 'dark')
		}
		if (!userTheme && prefersLightMode) {
			htmlElement.dataset.theme = 'light'
			localStorage.setItem('theme', 'light')
		}

		// if nothing is set default to dark mode
		if (!userTheme && !prefersDarkMode && !prefersLightMode) {
			htmlElement.dataset.theme = 'dark'
			localStorage.setItem('theme', 'dark')
		}

		return themes[userTheme]
	}

    function toggleTheme () {    
        const htmlElement = document.documentElement;
        const currentTheme = htmlElement.dataset.theme;
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        htmlElement.dataset.theme = newTheme;
        localStorage.setItem("theme", newTheme);
        selectedTheme = Object.values(themes).find(theme => theme.name === newTheme);
    }

    // document.documentElement.setAttribute('data-theme', value);
</script>

<button id="theme-toggle" on:click={toggleTheme}>
    {#if selectedTheme.name === 'dark'}
        <span>🌙</span>
    {:else}
        <span>☀️</span>
    {/if}
</button>

<style>
    #theme-toggle {
        position: fixed;
        top: 1.5rem;
        right: 1.5rem;
        padding: 0.5rem;
        z-index: 1000;
        border: none;
        background: none;
        cursor: pointer;
    }

    #theme-toggle:focus {
        outline: none;
    }

    #theme-toggle span {
        font-size: 2.5rem;
    }
</style>