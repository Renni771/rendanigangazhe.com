<script>
	import '../app.css';
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

<div
	class="flex flex-col text-zinc-200 antialiased sm:mx-14 md:mx-20 md:mt-32 md:flex-row xl:mx-56 2xl:mx-96"
>
	<Sidebar />

	<main class="mt-10 px-4 pb-4 md:pl-20">
		<slot />
	</main>
</div>
