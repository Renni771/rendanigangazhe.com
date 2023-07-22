<script>
	import '../app.css';
	import Analytics from '$components/Analytics.svelte';
	import Sidebar from '$components/Sidebar.svelte';
</script>

<svelte:head>
	<meta property="og:image" content="https://rendanigangazhe.com/og.png" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@rendanigangazhe" />
	<meta property="twitter:domain" content="rendanigangazhe.com" />
	<meta property="twitter:image" content="https://rendanigangazhe.com/og.png" />
	<meta name="twitter:site" content="@rendanigangazhe" />
</svelte:head>

<Analytics />

<div class="flex min-h-screen flex-col tracking-tight text-zinc-200 antialiased md:flex-row">
	<Sidebar />

	<main class="md:flex-[2] md:pt-40">
		<div class="mt-16 px-4 md:mt-0 md:w-[800px]">
			<slot />
		</div>
	</main>
</div>
