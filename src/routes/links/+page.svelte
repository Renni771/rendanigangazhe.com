<script lang="ts">
	import Card from '$components/Card.svelte';

	const websiteRepo = 'https://github.com/Renni771/rendanigangazhe.com';
</script>

<svelte:head>
	<title>Link Tree | Rendani Gangazhe</title>
</svelte:head>

<h1>Link Tree</h1>

<p class="text-lg">
	Here's a little link tree where you can find more information on what I'm up to.
</p>

<div class="my-8 flex w-full flex-col gap-4">
	<Card
		href="https://github.com/Renni771"
		title="Github"
		body="Check out my open-source work on Github."
	/>

	<Card
		href="https://www.linkedin.com/in/rendani-gangazhe-817243144/"
		title="LinkedIn"
		body="Link with me professionally."
	/>

	<Card href="https://twitter.com/rendanigangazhe" title="Twitter" body="I tweet!" />
</div>

<p class="text-lg">
	You can also <a href={websiteRepo}>
		<strong class="text-gray-100">view the source code for this website on Github</strong>
	</a>.
</p>
