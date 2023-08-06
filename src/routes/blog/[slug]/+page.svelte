<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<a href="/" class="back">
	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" fill-rule="nonzero"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.12,10.12)"><path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"></path></g></g></svg>
	
</a>

<article>
    <!-- Title -->
	<hgroup>
		<h1>{data.meta.title}</h1>
	</hgroup>

    <div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
    .back {
        margin-top: 2.5rem;
        display: block;
    }
    .back svg {
		width: 3rem;
		height: 3rem;
		
		filter: var(--clr-svg);
	}

    h1 {
		text-transform: capitalize;
		margin-top: var(--spacing-24);
	}
	
    @media (max-width: 1000px) {
        article {
            padding: 0 2rem;
        }

		.back {
			padding: 0 2rem;
		}
    }
</style>