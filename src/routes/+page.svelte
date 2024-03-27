<script>
	import Card from '$components/Card.svelte';
	import avatarSrc from '$lib/assets/avatar.webp';
	import WavingHand from '$lib/components/WavingHand.svelte';

	const metaContent =
		'Rendani Gangazhe. Software Engineer specialising in web and mobile app development. I thrive off of learning and trying out new things. I like guitars.';
	const metaTitle = 'Rendani Gangazhe - Software Engineer';
</script>

<svelte:head>
	<title>{metaTitle}</title>
	<meta name="description" content={metaContent} />

	<meta property="og:description" content={metaContent} />
	<meta property="og:title" content={metaTitle} />
</svelte:head>

<h1 class="text-center md:text-left md:text-5xl">
	<WavingHand /> hey, I'm Rendani.
</h1>

<div class="flex flex-col items-center justify-center md:my-12 md:flex-row">
	<img
		class="my-8 rounded-full md:my-0 md:mr-8"
		loading="lazy"
		src={avatarSrc}
		width={128}
		height={128}
		alt="My portrait"
	/>

	<p class="text-2xl font-bold lg:text-3xl">Software Engineer. Tinkerer. Creative.</p>
</div>

<div>
	<p class="prose prose-invert mt-4 text-lg">
		I'm a web developer with a passion for building things that live on the internet. I currently
		work <a href="https://thenativeweb.io/" target="_blank">@thenativeweb</a> building out cloud-based
		applications. If it runs on your desktop, phone or browser, I've build it.
	</p>

	<div class="my-8 flex flex-col gap-4 lg:flex-row">
		<Card
			href="/about/#skills"
			title="My Skills"
			body="Read up on my skills and what I have to offer"
		/>

		<Card
			href="/about/#experience"
			title="Professional Experience"
			body="A brief outline of my professional experience"
		/>
	</div>
</div>
