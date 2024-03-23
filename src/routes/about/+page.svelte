<script>
	import ExperienceCard from '$components/ExperienceCard.svelte';

	const metaDescription = 'A more detailed explanation about me and what I do';
	const metaTitle = 'About Me | Rendani Gangazhe';
</script>

<svelte:head>
	<title>{metaTitle}</title>

	<meta name="description" content={metaDescription} />

	<meta property="og:description" content={metaDescription} />
	<meta property="og:title" content={metaTitle} />

	<meta property="twitter:description" content={metaDescription} />
	<meta property="twitter:title" content={metaTitle} />
</svelte:head>

<h1 class="mt-1 md:pl-4">about me</h1>

<div class="prose prose-lg prose-invert py-8 md:pl-4">
	<p>
		I'm Rendani, a Software Engineer. Originally from South Africa, trying to soak up the sun in
		Germany. If I'm not coding, you'll catch me diving into classic movies, exploring obscure music
		or playing guitar &#127928;.
	</p>

	<p>
		The name "Rendani" is a
		<a href="https://en.wikipedia.org/wiki/Venda_people" target="_blank"> Tshivenda </a>
		unisex name meaning "praise/give praise" and is under no circumstances
		<a href="https://en.wikipedia.org/wiki/Rendani_Airport" target="_blank">
			to be confused with the airport.
		</a>
	</p>

	<div class="mt-4 h-1" id="experience" />

	<section>
		<h2>professional experience</h2>

		<ExperienceCard
			title="The Native Web"
			href="https://thenativeweb.io/"
			from="Dec 2023"
			to="Now"
			body="Backend development using golang. Currently building web services with a heavy focus on CQRS, Event Sourcing and Domain-Driven Design."
		/>

		<ExperienceCard
			title="Mäuschen App"
			href="https://mäuschen.app/"
			from="Jul 2020"
			to="Jun 2022"
			body="Built frontend apps using Flutter and backend services using TypeScript. DevOps using Docker/Docker Compose and Kubernetes."
		/>
	</section>

	<div class="mt-4 h-1" id="skills" />

	<section class="flex flex-col gap-4">
		<section>
			<h2>technical skills</h2>

			<p>
				I'm most experienced with <strong>JavaScript</strong>, <strong>TypeScript</strong> for both
				front and backend development and also use <strong>Go</strong> for more general purpose programming.
			</p>
		</section>

		<div class="flex flex-col gap-4 lg:flex-row">
			<section>
				<h3>frontend</h3>

				<p>
					I've used <strong>Svelte</strong>, <strong>Vue.js</strong>, <strong>React</strong> as well
					as their respective meta-frameworks (SvelteKit and Next.js) to build out user interfaces.
					Personally I really enjoy using <strong>Svelte</strong> and <strong>Sveltekit</strong>.
				</p>

				<p>
					I also have some knowledge of <strong>React</strong> and <strong>Next.js</strong>.
				</p>

				<p>
					For about 2 years I used <strong>Flutter</strong> for cross-platform mobile app
					development, using various state management libraries including <strong>Provider</strong>
					and <strong>Riverpod</strong>.
				</p>
			</section>

			<section>
				<h3>backend</h3>

				<p>
					On the backend, I usually use <strong>Node.js</strong> or <strong>Go</strong> depending on
					the project requirements.
				</p>

				<p>
					Regarding databases, I've worked with <strong>Postgres</strong> and other SQL databases
					such as
					<strong>MySQL</strong>. My most used NoSQL database is <strong>Firebase</strong>.
				</p>
			</section>
		</div>

		<div class="flex flex-col gap-4 lg:flex-row">
			<section>
				<h3>other languages and tools</h3>

				<p>
					I've used <strong>Python</strong> but haven't used it in any professional settings.
				</p>
			</section>

			<section>
				<h3>DevOps</h3>

				<p>
					When writing cloud services, I use <strong>Docker</strong> for containerising
					web-applications and <strong>Kubernetes</strong> to deploy them.
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
