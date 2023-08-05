<script lang="ts">
    import * as config from '../lib/config';
    import Presentation from "./components/presentation.svelte";
    import Blog from "./components/blog.svelte";

    export let data
    const { posts } = data
</script>

<svelte:head>
    <title>{config.title} | Portfolio</title>
    <meta name="description" content={config.description}>
    <meta name="keywords" content="HTML, CSS, JavaScript, TypeScript, Full Stack, Frontend, Backend, Developer, NodeJS, Software Engineer">
    <meta name="author" content={config.title}>
</svelte:head>

<Presentation />

<section style="font-size: var(--font-20); margin-bottom: 5rem">
    <p>👋 Hi, I am Alvaro Valverde Blanco! Software engineering student based in Madrid</p>
</section>
<!--
<section>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
</section>

<section>
    <h2>Projects</h2>
</section>
-->

<Blog {posts}/>

<style>
    @media (max-width: 1000px) {
        section {
            padding: 0 3rem;
        }
    }
</style>