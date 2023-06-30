<script lang="ts">
    import Header from './header.svelte';
    import Footer from './footer.svelte';

    import '../styles/styles.css'
</script>

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
        max-inline-size: 1440px;
        display: grid;
        grid-template-rows: auto 1fr auto;
        margin-inline: auto;
    }
</style>