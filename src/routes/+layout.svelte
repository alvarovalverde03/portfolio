<script lang="ts">
    import Header from './header.svelte';
    import Footer from './footer.svelte';

    import * as config from '../lib/config';

    import '../styles/styles.css'
</script>

<svelte:head>
    <title>{config.title}</title>
    <description>{config.description}</description>
</svelte:head>

<div class="layout">
    <Header />

    <main>
        <slot />
    </main>

    <Footer />
</div>

<style>
    .layout {
        height: 100%;
        max-inline-size: 1000px;
        display: grid;
        grid-template-rows: auto 1fr auto;
        margin-inline: auto;
    }
</style>