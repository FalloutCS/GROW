<script>
	let { data } = $props();
</script>

<!-- Header -->
<div class="mb-8 flex items-center justify-between">
	<h1 class="font-header text-2xl text-secondary">My Team Demos</h1>
	<div class="flex gap-3">
		<form id="uploadDemo" method="post">
			<button
				class="flex items-center gap-2 rounded-md bg-accent-cyan px-4 py-2 text-primary transition-colors hover:bg-accent-cyan-dark"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
					<polyline points="17 8 12 3 7 8" />
					<line x1="12" y1="3" x2="12" y2="15" />
				</svg>
				Upload Demo
			</button>
		</form>
	</div>
</div>
