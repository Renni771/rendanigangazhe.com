<script>
	import ExperienceCard from '$components/ExperienceCard.svelte';
</script>

<h1>About me</h1>

<p class="mt-8 text-lg">
	I'm Rendani, a full stack web/mobile app developer and Computer Science student. I'm
	originally from South Africa but am currently based in Freiburg, Germany. I keep a wide range of
	interests besides coding and enjoy training and playing guitar &#127928;.
</p>

<p class="mt-8 text-lg">
	The name "Rendani" is a
	<a class="font-bold underline" href="https://en.wikipedia.org/wiki/Venda_people" target="_blank">
		<strong>Tshivenda</strong>
	</a>
	unisex name meaning "praise/give praise" and is under no circumstances
	<a
		class="font-bold underline"
		href="https://en.wikipedia.org/wiki/Rendani_Airport"
		target="_blank"
	>
		<strong>to be confused with the airport.</strong>
	</a>
</p>

<div class="mt-16 h-1" id="experience" />

<article>
	<h2>Professional Experience</h2>

	<ExperienceCard
		title="Mäuschen App"
		href="https://mäuschen.app/"
		from="2020"
		to="2022"
		body="Responsible for building cross-platform mobile apps using Flutter. Built out JSON APIs using Express.js, containerised them with Docker/Docker Compose and deployed them in Kubernetes clusters. "
	/>
</article>

<div class="mt-16 h-1" id="skills" />

<article class="flex flex-col gap-4">
	<h2>Technical Skills</h2>

	<section>
		<p class="text-lg">
			I'm most experienced using <strong>JavaScript</strong> and <strong>TypeScript</strong> for
			both front and backend development and am also comfortable using
			<strong>Dart</strong> along with the <strong>Flutter</strong> UI kit for cross-platform mobile
			app development.
		</p>
	</section>

	<div class="mt-4 flex flex-col gap-4 lg:flex-row">
		<section class="rounded border-2 border-zinc-500 p-6">
			<h3 class="text-xl">Frontend</h3>

			<p class="mt-4 text-lg">
				Regarding <strong>Flutter</strong> app development, I have professional experience with
				various state management libraries including <strong>Provider</strong>
				and <strong>Riverpod</strong>.
			</p>

			<p class="mt-4 text-lg">
				On the web development side of things, I build user interfaces with pure <strong
					>HTML5/CSS3</strong
				>
				and larger more interactive web apps using
				<strong>Svelte</strong>
				and <strong>Sveltekit</strong>.
			</p>

			<p class="mt-4 text-lg">
				I also have some knowledge of <strong>React</strong> and
				<strong>Next.js</strong>.
			</p>
		</section>

		<section class="rounded border-2 border-zinc-500 p-6">
			<h3 class="text-xl">Backend</h3>

			<p class="mt-4 text-lg">
				On the backend I'm most experienced with <strong>Node.js</strong> and use it build out with
				<strong>Express.js</strong> APIs.
			</p>

			<p class="mt-4 text-lg">
				My preferred database is <strong>Firebase</strong> but I also have experience using
				<strong>MinIO</strong>, <strong>MySQL</strong> and other similar relational databases following
				the SQL standard.
			</p>
		</section>
	</div>

	<div class="flex flex-col gap-4 lg:flex-row">
		<section class="rounded border-2 border-zinc-500 p-6">
			<h3 class="text-xl">Other languages and tools</h3>

			<p class="mt-4 text-lg">
				I've used <strong>Python</strong> and <strong>Go</strong> but haven't used them in any professional
				settings.
			</p>

			<p class="mt-4 text-lg">
				I'm also familiar the usual developer tools such as <strong>Git</strong>,
				<strong>Gitea</strong>, <strong>Github</strong> and
				<strong>Jira</strong>.
			</p>
		</section>

		<section class="rounded border-2 border-zinc-500 p-6">
			<h3 class="text-xl">DevOps</h3>

			<p class="mt-4 text-lg">
				I leverage <strong>Docker</strong> and <strong>Kubernetes</strong> to help build
				containerised web services deployed through <strong>CI-CD</strong> pipelines
			</p>
		</section>
	</div>
</article>

<style>
	section {
		flex: 1;
	}
</style>
