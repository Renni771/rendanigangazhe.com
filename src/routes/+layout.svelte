<script>
	import Sidebar from '$components/Sidebar.svelte';
	import '../app.postcss';
</script>

<svelte:head>
	<title>Rendani Gangazhe - Software Engineer</title>
</svelte:head>

<div
	class="flex flex-col text-zinc-200 antialiased sm:mx-14 md:mx-20 md:mt-32 md:flex-row xl:mx-56 2xl:mx-96"
>
	<Sidebar />

	<main class="mt-10 px-4 pb-4 md:pl-20">
		<slot />
	</main>
</div>
