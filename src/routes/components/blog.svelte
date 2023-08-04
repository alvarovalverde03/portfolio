<script lang="ts">
    import type { Post } from '$lib/types';
    export let posts: Post[]
</script>

<section>
    <h2>Blog</h2>
    <div class="posts">
        {#each posts as post}
            <a href='/blog/{post.slug}' class="post">
				<p class="title">{post.title}</p>
				<p class="description">{post.description}</p>
            </a>
		{/each}
    </div>
</section>

<style>
    .posts {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .post {
        background-color: rgb(94, 94, 94);
        border-radius: 5px;
        padding: 2rem 3rem;
    }
    .post:hover {
        background-color: rgb(94, 94, 94, 0.8);
    }
    .post .title {
        font-size: 2rem;
        font-weight: bold;
        text-decoration: none;
    }
    .post p {
        margin-block-start: 0;
        margin-block-end: 0;
    }

    @media (max-width: 1000px) {
        section {
            padding: 0 3rem;
        }
    }
</style>