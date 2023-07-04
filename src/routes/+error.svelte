<script lang="ts">
	import { page } from '$app/stores';

	let notFound = $page.status === 404;
</script>

<svelte:head>
	<title>{notFound ? 'Page not found' : 'Error'} - Rendani Gangazhe - Software Engineer</title>
</svelte:head>

<div class="flex flex-col items-center">
	{#if notFound}
		<h1>🤔 404</h1>

		<p>Oops! Page not found.</p>
	{:else}
		<h1>Woah 🤯!</h1>

		<p>Something went wrong.</p>
	{/if}

	<a class="m-4 rounded bg-zinc-100 px-8 py-4 text-black shadow-md hover:bg-zinc-300" href="/">
		Take me home!
	</a>
</div>
