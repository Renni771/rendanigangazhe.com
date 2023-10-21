<script lang="ts">
	import { page } from '$app/stores';
	import Socials from './Socials.svelte';

	const navbarUrls = [
		{ href: '/', text: 'home' },
		{ href: '/about', text: 'about me' },
		{ href: '/blog', text: 'blog' }
	];

	$: isCurrentPage = (url: string) => {
		let currentPage = $page.url.pathname;
		if (currentPage.includes('/blog/')) {
			currentPage = '/blog';
		}

		return currentPage.endsWith(url);
	};
	$: shouldShowSocials = $page.url.pathname !== '/links';
</script>

<aside
	class="sticky top-0 z-50 flex items-end justify-center bg-[--night] pt-4 md:top-40 md:flex-col md:justify-start md:pr-10 md:pt-10"
>
	<nav class="sticky top-0 flex gap-2 md:top-40 md:flex-col">
		{#each navbarUrls as { href, text }}
			<a
				class={`whitespace-nowrap p-2 text-right text-xl transition-colors hover:text-neutral-50 ${
					isCurrentPage(href)
						? 'border-b-zinc-300 text-neutral-50 underline underline-offset-8'
						: 'text-neutral-400'
				}`}
				{href}
			>
				{text}
			</a>
		{/each}

		<a
			class={`whitespace-nowrap p-2 text-right text-xl transition-colors hover:text-neutral-50 md:hidden ${
				isCurrentPage('links')
					? 'border-b-zinc-300 text-neutral-50 underline underline-offset-8'
					: 'text-neutral-400'
			}`}
			href="/links"
		>
			links
		</a>

		{#if shouldShowSocials}
			<div class="hidden md:mt-20 md:block">
				<Socials />
			</div>
		{/if}
	</nav>
</aside>
