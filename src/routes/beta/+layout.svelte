<script>
	/** @type {{ data: import('./$types').LayoutData, children: import('svelte').Snippet }} */
	let { data, children } = $props();

	const navItems = [
		{ label: 'Overview', icon: '🏠', href: '/beta' },
		{ label: 'Dashboard', icon: '📊', href: '/beta/dashboard' },
		{ label: 'Demo Master', icon: '🎮', href: '/beta/demo-master' },
		{ label: 'AI Fazer', icon: '🤖', href: '/beta/ai-fazer' },
		{ label: 'Tools', icon: '🛠', href: '/beta/tools' }
	];
</script>

<div class="flex min-h-screen flex-col">
	<!-- Header -->
	<header
		class="flex items-center justify-between border-b border-primary-200 bg-primary-400 px-8 py-3"
	>
		<div class="h-full flex items-center w-48 border-r border-primary-200">
			<img src="/Logo Grow.svg" alt="Grow-GG" class="h-8" />
		</div>
		<div class="flex items-center gap-4">
			<button
				class="rounded-md bg-accent-green px-4 py-2 font-header text-primary transition-colors hover:bg-accent-green-dark"
			>
				GET PRO
			</button>
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button class="rounded-full p-2 text-secondary transition-colors hover:bg-primary-300">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
				>
					<circle cx="12" cy="12" r="3" />
					<path
						d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
					/>
				</svg>
			</button>
		</div>
	</header>

	<div class="flex flex-1">
		<!-- Sidebar -->
		<nav class="w-56 border-r border-primary-200 bg-primary-400">
			<div class="space-y-2 p-4">
				{#each navItems as item}
					<a
						href={item.href}
						class="flex items-center gap-3 rounded-md px-4 py-2 text-secondary-300 transition-colors hover:bg-primary-300 hover:text-secondary"
					>
						<span>{item.icon}</span>
						<span class="font-header">{item.label}</span>
					</a>
				{/each}
			</div>
		</nav>

		<!-- Main Content -->
		<main class="flex-1 bg-primary p-6">
			{@render children()}
		</main>
	</div>
</div>
