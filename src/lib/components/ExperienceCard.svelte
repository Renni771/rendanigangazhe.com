<script lang="ts">
	export let title: string;
	export let from: string;
	export let to: string;
	export let body: string;
	export let href: string;
</script>

<div
	class="mt-4 flex rounded border-2 border-zinc-500 p-0.5 duration-300 transition-colors md:hover:border-zinc-300"
>
	<a {href} class="w-full px-6 py-4 no-underline">
		<p class="m-0 text-2xl font-bold">
			{title}
			<span>&rarr;</span>
		</p>
		<p class="text-neutral-400">
			From {from} to {to}
		</p>
		<p class="mb-0 mt-2">
			{body}
		</p>
	</a>
</div>
