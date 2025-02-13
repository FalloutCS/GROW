<script>
	import Header from './components/Header.svelte';
	import Table from './components/Table.svelte';

	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
	let demos = $state([
		{
			map: 'Ancient',
			mapIcon: './mapIcons/map_icon_de_ancient.svg',
			snapShots: 5,
			teams: 'TEAM2 vs TEAM1',
			score: '-',
			date: 'Feb 12th 2025'
		},
		{
			map: 'Ancient',
			mapIcon: './mapIcons/map_icon_de_ancient.svg',
			snapShots: 5,
			teams: 'TEAM2 vs TEAM1',
			score: '-',
			date: 'Feb 12th 2025'
		}
	]);

    function UploadDemo(demo) {
        
    }
</script>

<div class="p-6">
	<Header />

	<Table {demos} />

	<!-- Footer -->
	<div class="mt-4 text-center text-secondary-400">
		<p>Showing {demos.length} of {demos.length} demos</p>
		<button class="mt-2 px-4 py-2 text-accent-cyan transition-colors hover:text-accent-cyan-dark">
			Load More
		</button>
	</div>
</div>
