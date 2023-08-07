<script lang="ts">
    import type { Post } from '$lib/types';
    import { formatDate } from '$lib/utils';
    export let posts: Post[]
</script>

<section>
    <h2 class="title">Blog</h2>
    <div class="posts">
        {#each posts as post}
            <a href='/blog/{post.slug}' class="post">
				<span class="post__title">{post.title}</span>
                <span class="published_date">{formatDate(post.date)}</span>
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
        padding: var(--spacing-16) var(--spacing-24);
        background: var(--clr-bg-3);
        border-radius: var(--rounded-4);

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .post:hover {
        background: var(--clr-bg-2);
        color: var(--clr-txt);
    }
    
    .post .post__title {
        font-size: var(--font-20);
    }

	.published_date {
		opacity: 0.7;
        font-size: var(--font-16);
	}

    @media (max-width: 1000px) {
        section {
            padding: 0 2rem;
        }
    }

    
	@media (max-width: 768px) {
        .post {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--spacing-16);
        }
    }
</style>