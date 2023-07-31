import type { Post } from '$lib/types';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
    const res = await fetch('api/posts')
    const posts: Post[] = await res.json()
    console.log(posts)
    return { posts }
}) satisfies PageLoad;