<script>
    let {demos} = $props();
</script>


<!-- Table -->
<div class="w-full">
	<!-- Table Header -->
	<div
		class="grid grid-cols-[40px_200px_1fr_200px_200px_200px_100px] gap-4 border-b border-primary-200 px-4 py-2 text-sm text-secondary-400"
	>
		<div><input type="checkbox" class="accent-accent-cyan" /></div>
		<div>MAP</div>
		<div>TEAMS</div>
		<div>SNAPSHOTS</div>
		<div>SCORE</div>
		<div>DATE</div>
		<div></div>
		<!-- Actions column -->
	</div>

	<!-- Table Body -->
	{#each demos as demo}
		<div
			class="grid grid-cols-[40px_200px_1fr_200px_200px_200px_100px] gap-4 border-b border-primary-200 px-4 py-4 text-secondary transition-colors hover:bg-primary-300/50"
		>
			<div><input type="checkbox" class="accent-accent-cyan" /></div>
			<div class="flex items-center gap-2">
				<img src={demo.mapIcon} alt={demo.map} class="h-6 w-6 rounded" />
				<span>{demo.map}</span>
			</div>
			<div>{demo.teams}</div>
			<div>{demo.snapShots}</div>
			<div>{demo.score}</div>
			<div>{demo.date}</div>
			<div class="flex gap-2">
				<button class="p-1 text-secondary-400 transition-colors hover:text-accent-cyan">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
					>
						<circle cx="12" cy="12" r="10" />
						<polygon points="10 8 16 12 10 16 10 8" />
					</svg>
				</button>
			</div>
		</div>
	{/each}
</div>
