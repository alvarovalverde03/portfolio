<script lang="ts">
    import * as config from '$lib/config';
    import Presentation from "./components/presentation.svelte";
    import Blog from "./components/blog.svelte";
	import Projects from './components/projects.svelte';

    export let data
    const { posts } = data
</script>

<svelte:head>
    <title>{config.title} | Portfolio</title>
    <meta name="description" content={config.description}>
    <meta name="keywords" content="HTML, CSS, JavaScript, TypeScript, Full Stack, Frontend, Backend, Developer, NodeJS, Software Engineer">
    <meta name="author" content={config.title}>

    <meta property="og:url" content={config.og_url}>
    <meta property="og:image" content="/og/og-alvaro-valverde-blanco.png"/>
    <meta property="og:title" content={config.title}/>
    <meta property="og:description" content={config.description}/>

	<meta name="twitter:title" content={config.title} />
	<meta name="twitter:description" content={config.description} />
	<meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="/og/og-alvaro-valverde-blanco.png"/>
</svelte:head>

<Presentation />

<section style="font-size: var(--font-20); margin-bottom: 5rem">
    <p>👋 Hi, I'm Álvaro Valverde, a Software Engineering student based in Madrid. I'm currently doing an internship at Elecnor Deimos, an exciting experience where I apply and expand my knowledge in the world of technological development. </p>
</section>

<Projects />

<Blog {posts}/>

<style>
    @media (max-width: 1000px) {
        section {
            padding: 0 2rem;
        }
    }
</style>