<script lang="ts">
    import type { PageData } from './$types';
	import { formatDate } from '$lib/utils';
	import BackIcon from '$lib/icons/BackIcon.svelte';
	import { title, og_url } from '$lib/config';

    export let data: PageData;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
    <meta name="description" content={data.meta.description} />

	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://alvarovalverde.dev" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:image" content="{og_url}?message={data.meta.title}"  />

	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="{og_url}?message={data.meta.title}" />
</svelte:head>

<a href="/" class="back">
	<BackIcon />
</a>

<article>
    <!-- Title -->
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p class="published_date">{formatDate(data.meta.date)}</p>
	</hgroup>

    <div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
    .back {
        margin-top: 2.5rem;
        display: block;
		width: fit-content;
    }

	article hgroup {
		margin-top: var(--spacing-64);
		margin-bottom: var(--spacing-32);
	}

	.published_date {
		margin-top: 0.5rem;
		opacity: 0.7;
		font-size: var(--post-txt-size);
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