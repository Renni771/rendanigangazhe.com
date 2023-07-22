<script>
	export let data;
</script>

<svelte:head>
	<title>{data.title} | Blog | Rendani Gangazhe</title>
	<meta name="description" content={data.description} />

	<meta property="og:author" content={'Rendani Gangazhe'} />
	<meta property="og:description" content={data.description} />
	<meta property="og:published_time" content={data.date} />
	<meta property="og:title" content={data.title} />
	<meta property="og:url" content="https://rendanigangazhe.com/blog/{data.slug}" />

	<meta name="twitter:card" content={data.description} />
	<meta property="twitter:description" content={data.description} />
	<meta property="twitter:title" content={data.title} />
	<meta property="twitter:url" content="https://rendanigangazhe.com/blog/{data.slug}" />
</svelte:head>

<article>
	<header>
		<a href="/blog">&larr; Go Back</a>

		<h1 class="mt-4">{data.title}</h1>

		<p class="mt-4">{data.date}</p>
	</header>

	<section class="prose prose-lg prose-invert mt-4">
		<svelte:component this={data.content} />
	</section>
</article>
