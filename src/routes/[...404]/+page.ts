import { error } from '@sveltejs/kit';

export const prerender = false;

export function load() {
	throw error(404, 'Page Not Found');
}
