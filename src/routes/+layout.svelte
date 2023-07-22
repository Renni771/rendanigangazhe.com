<script>
	import '../app.css';
	import Analytics from '$components/Analytics.svelte';
	import Sidebar from '$components/Sidebar.svelte';

	const metaContent =
		'Rendani Gangazhe. Software Engineer specialising in web and mobile app development. I thrive off of learning and trying out new things. I like guitars.';
	const metaTitle = 'Rendani Gangazhe - Software Engineer';
</script>

<svelte:head>
	<title>{metaTitle}</title>
	<meta name="description" content={metaContent} />
	<meta property="og:title" content={metaTitle} />
	<meta property="og:description" content={metaContent} />
</svelte:head>

<Analytics />

<div class="flex min-h-screen flex-col text-zinc-200 antialiased md:flex-row tracking-tight">
	<Sidebar />

	<main class="md:flex-[2] md:pt-40">
		<div class="px-4 md:w-[800px] mt-16 md:mt-0">
			<slot />
		</div>
	</main>
</div>
