<span class="hand"> &#128075;</span>

<style>
	span.hand {
		animation-name: wave-animation;
		animation-duration: 2.5s;
		animation-iteration-count: infinite;
		transform-origin: 70% 70%;
		display: inline-block;
	}

	@keyframes wave-animation {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(-10deg);
		}
		20% {
			transform: rotate(12deg);
		}
		30% {
			transform: rotate(-10deg);
		}
		40% {
			transform: rotate(9deg);
		}
		50% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
