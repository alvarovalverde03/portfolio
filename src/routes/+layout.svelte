<script lang="ts">
    import Header from './header.svelte';
    import Footer from './footer.svelte';
	import Themes from "./components/themes.svelte";

    import '../styles/styles.css'
    
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    inject({ mode: dev ? 'development' : 'production' });
</script>


<div class="layout">
    <!-- <Header /> -->

    <Themes />
    <main>
        <slot />
    </main>

    <Footer />
</div>

<style>
    .layout {
        height: 100%;
        max-inline-size: 900px;
        display: grid;
        grid-template-rows: 1fr auto; /* with header -> auto 1fr auto */
        margin-inline: auto;
    }
</style>