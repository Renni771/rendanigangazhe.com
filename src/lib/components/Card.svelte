<script lang="ts">
	export let title: string;
	export let body: string;
	export let href: string;
</script>

<div
	class="flex rounded border-2 border-zinc-500 p-0.5 duration-300 transition-colors md:hover:border-zinc-300"
>
	<a {href} class="w-full px-6 py-4 no-underline">
		<h2 class="m-0 text-xl">
			{title}
			<span>&rarr;</span>
		</h2>
		<p class="mb-0 mt-2">
			{body}
		</p>
	</a>
</div>
