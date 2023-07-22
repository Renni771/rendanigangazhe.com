import type { PostMetadata } from '$lib/PostMetadata';
import { formatDate, isDateBeforeOther } from '$lib/time';

export async function load() {
	const paths = import.meta.glob('../../lib/posts/*.md', { eager: true });
	const posts: PostMetadata[] = [];

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').pop()?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as PostMetadata;

			posts.push({
				...metadata,
				date: formatDate(metadata.date),
				slug
			});
		}
	}

	return {
		posts: posts.sort((a, b) => (isDateBeforeOther(a.date, b.date) ? 1 : -1))
	};
}
