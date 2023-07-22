<script>
	export let data;
</script>

<svelte:head>
	<title>Blog | Rendani Gangazhe</title>
	<meta name="description" content={`Rendani's blog`} />
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
