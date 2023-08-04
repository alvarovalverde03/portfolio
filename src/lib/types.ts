export type Categories = 'sveltekit' | 'react' | 'nodejs'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}