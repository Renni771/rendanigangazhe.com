import { error } from '@sveltejs/kit';
import { formatDate } from '$lib/time';
import type { PostMetadata } from '$lib/PostMetadata';

export async function load({ params }) {
	try {
		// MdsveX pre-processes *.md files, so they are basically treated as svelte components.
		const post = await import(`../../../lib/posts/${params.slug}.md`);
		const metadata = post.metadata as PostMetadata;

		return {
			...metadata,
			content: post.default,
			date: formatDate(metadata.date)
		};
	} catch (ex) {
		throw error(404, `Could not find post '${params.slug}'`);
	}
}
