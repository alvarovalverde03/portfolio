<script lang="ts">
    import type { Post } from '$lib/types';
    export let posts: Post[]
</script>

<section>
    <h2 class="title">Blog</h2>
    <div class="posts">
        {#each posts as post}
            <a href='/blog/{post.slug}' class="post">
				<span class="title">{post.title}</span>
            </a>
		{/each}
    </div>
</section>

<style>
    .title {
        margin-bottom: var(--spacing-16);
    }

    .posts {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-16);
    }

    .post {
        padding: var(--spacing-8) var(--spacing-16);
        background: var(--clr-bg-3);
        border-radius: var(--rounded-4);
    }

    .post:hover {
        background: var(--clr-bg-2);
    }
    
    .post .title {
        font-size: var(--font-20);
    }

    @media (max-width: 1000px) {
        section {
            padding: 0 3rem;
        }
    }
</style>