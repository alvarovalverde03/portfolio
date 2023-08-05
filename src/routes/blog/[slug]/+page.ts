import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit'

export const load = (async ({ params }) => {
    try {
        const post = await import(`../posts/${params.slug}.md`)

        return {
            content: post.default,
            meta: post.metadata
        }
    } catch (err) {
        throw error(404, `Could not founr ${params.slug}`)
    }
}) satisfies PageLoad;