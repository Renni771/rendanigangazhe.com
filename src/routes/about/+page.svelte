<script>
	import ExperienceCard from '$components/ExperienceCard.svelte';
</script>

<svelte:head>
	<title>About Me | Rendani Gangazhe</title>
</svelte:head>

<h1 class="mt-2">about me</h1>

<div class="prose prose-lg prose-invert mt-4 p-1">
	<p>
		I'm Rendani, a full stack web/mobile app developer and Computer Science student. I'm originally
		from South Africa but am currently based in Freiburg, Germany. I keep a wide range of interests
		besides coding and enjoy training and playing guitar &#127928;.
	</p>

	<p>
		The name "Rendani" is a
		<a
			class="font-bold underline"
			href="https://en.wikipedia.org/wiki/Venda_people"
			target="_blank"
		>
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

	<div class="mt-4 h-1" id="experience" />

	<section>
		<h2>professional experience</h2>

		<ExperienceCard
			title="Mäuschen App"
			href="https://mäuschen.app/"
			from="2020"
			to="2022"
			body="Responsible for building cross-platform mobile apps using Flutter. Built out JSON APIs using Express.js, containerised them with Docker/Docker Compose and deployed them in Kubernetes clusters. "
		/>
	</section>

	<div class="mt-4 h-1" id="skills" />

	<section class="flex flex-col gap-4">
		<h2>technical skills</h2>

		<section>
			<p>
				I'm most experienced using <strong>JavaScript</strong> and <strong>TypeScript</strong> for
				both front and backend development and am also comfortable using
				<strong>Dart</strong> along with the <strong>Flutter</strong> UI kit for cross-platform mobile
				app development.
			</p>
		</section>

		<div class="flex flex-col gap-4 lg:flex-row">
			<section>
				<h3>frontend</h3>

				<p>
					Regarding <strong>Flutter</strong> app development, I have professional experience with
					various state management libraries including <strong>Provider</strong>
					and <strong>Riverpod</strong>.
				</p>

				<p>
					On the web development side of things, I build user interfaces with pure <strong
						>HTML5/CSS3</strong
					>
					and larger more interactive web apps using
					<strong>Svelte</strong>
					and <strong>Sveltekit</strong>.
				</p>

				<p>
					I also have some knowledge of <strong>React</strong> and
					<strong>Next.js</strong>.
				</p>
			</section>

			<section>
				<h3>backend</h3>

				<p>
					On the backend I'm most experienced with <strong>Node.js</strong> and use it build out
					with
					<strong>Express.js</strong> APIs.
				</p>

				<p>
					My preferred database is <strong>Firebase</strong> but I also have experience using
					<strong>MinIO</strong>, <strong>MySQL</strong> and other similar relational databases following
					the SQL standard.
				</p>
			</section>
		</div>

		<div class="flex flex-col gap-4 lg:flex-row">
			<section>
				<h3>other languages and tools</h3>

				<p>
					I've used <strong>Python</strong> and <strong>Go</strong> but haven't used them in any professional
					settings.
				</p>

				<p>
					I'm also familiar the usual developer tools such as <strong>Git</strong>,
					<strong>Gitea</strong>, <strong>Github</strong> and
					<strong>Jira</strong>.
				</p>
			</section>

			<section>
				<h3>DevOps</h3>

				<p>
					I leverage <strong>Docker</strong> and <strong>Kubernetes</strong> to help build
					containerised web services deployed through <strong>CI-CD</strong> pipelines
				</p>
			</section>
		</div>
	</section>
</div>

<style>
	section {
		flex: 1;
	}
</style>
