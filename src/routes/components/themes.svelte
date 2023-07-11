<script lang="ts">
    import { writable } from 'svelte/store';

    let theme = writable('dark');

    theme.subscribe((value) => {
        if (typeof window !== 'undefined') {
            // localStorage.setItem('theme', value);
            document.documentElement.setAttribute('data-theme', value);
        }
    });

    function toggleTheme() {
        theme.update((value) => (value === 'dark' ? 'light' : 'dark'));
    };
</script>

<button id="theme-toggle" on:click={toggleTheme}>
    {#if $theme === 'dark'}
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