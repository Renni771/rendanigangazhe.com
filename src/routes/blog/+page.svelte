<script>
	export let data;

	const metaDescription = `My blog. A place where I write about what I'm up to and what's on my mind`;
	const metaTitle = 'Blog | Rendani Gangazhe';
</script>

<svelte:head>
	<title>{metaTitle}</title>
	<meta name="description" content={metaDescription} />

	<meta property="og:author" content={'Rendani Gangazhe'} />
	<meta property="og:description" content={metaDescription} />
	<meta property="og:title" content={metaTitle} />

	<meta property="twitter:description" content={metaDescription} />
	<meta property="twitter:title" content={metaTitle} />
</svelte:head>

<h1 class="ml-4 mt-2">blog</h1>

{#each data.posts as { title, date, description, slug }}
	<div class="mt-5 rounded-md p-4 transition hover:bg-zinc-200 hover:bg-opacity-10 md:mt-10">
		<a href="/blog/{slug}">
			<div class="flex flex-col justify-between lg:flex-row">
				<h2 class="font-bold text-neutral-200">{title}</h2>
				<span class="text-neutral-400">{date}</span>
			</div>

			<p class="mt-2 text-neutral-300">{description}</p>
		</a>
	</div>
{/each}
