<script lang="ts">
    import Header from './header.svelte';
    import Footer from './footer.svelte';
	import Themes from "./components/themes.svelte";

    import * as config from '../lib/config';

    import '../styles/styles.css'
</script>

<svelte:head>
    <title>{config.title} | Portfolio</title>
    <meta name="description" content={config.description}>
    <meta name="keywords" content="HTML, CSS, JavaScript, TypeScript, Full Stack, Frontend, Backend, Developer, NodeJS, Software Engineer">
    <meta name="author" content={config.title}>
</svelte:head>

<div class="layout">
    <!-- <Header /> -->

    <main>
        <Themes />
        <slot />
    </main>

    <Footer />
</div>

<style>
    .layout {
        height: 100%;
        max-inline-size: 1000px;
        display: grid;
        grid-template-rows: 1fr auto; /* with header -> auto 1fr auto */
        margin-inline: auto;
    }
</style>