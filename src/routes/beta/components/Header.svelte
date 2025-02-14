<script>
	import Modal from './Modal.svelte';
	let { data } = $props();
	let showModal = $state(false);
	let dragOver = $state(false);
	let selectedFile = $state(null);
  
	function handleDragOver(e) {
	  e.preventDefault();
	  dragOver = true;
	}
  
	function handleDragLeave() {
	  dragOver = false;
	}
  
	function handleDrop(e) {
	  e.preventDefault();
	  dragOver = false;
	  const file = e.dataTransfer.files[0];
	  if (file && file.name.endsWith('.dem')) {
		selectedFile = file;
	  }
	}
  
	function handleFileSelect(e) {
	  const file = e.target.files[0];
	  if (file) {
		selectedFile = file;
	  }
	}
  </script>
  
  <!-- Header -->
  <div class="mb-8 flex items-center justify-between">
	<h1 class="font-header text-2xl text-secondary">My Team Demos</h1>
	<div class="flex gap-3">
	  <button
		onclick={() => (showModal = true)}
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
	</div>
  </div>
  
  <Modal bind:showModal>
	{#snippet header()}
	  <h2 class="text-xl font-header text-secondary">Upload your demo</h2>
	{/snippet}
  
	<form 
	  method="POST" 
	  enctype="multipart/form-data"
	  class="mt-6 space-y-6"
	>
	  <!-- Drag & Drop Zone -->
	  <div
		class="relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed 
			   {dragOver ? 'border-accent-cyan bg-primary-300/50' : 'border-primary-200'} 
			   p-8 transition-colors"
		ondragover={handleDragOver}
		ondragleave={handleDragLeave}
		ondrop={handleDrop}
	  >
		<svg 
		  class="mb-4 h-12 w-12 text-secondary-400" 
		  xmlns="http://www.w3.org/2000/svg" 
		  fill="none" 
		  viewBox="0 0 24 24" 
		  stroke="currentColor"
		>
		  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
		</svg>
		
		<p class="mb-2 text-center text-secondary-200">
		  Drag and drop your demo file here
		</p>
		<p class="text-sm text-secondary-400">
		  or
		</p>
		
		<label class="mt-4 cursor-pointer">
		  <span class="rounded-md bg-primary-300 px-4 py-2 text-secondary hover:bg-primary-200 transition-colors">
			Browse Files
		  </span>
		  <input
			type="file"
			name="demo"
			accept=".dem"
			class="hidden"
			onchange={handleFileSelect}
		  />
		</label>
	  </div>
  
	  {#if selectedFile}
		<div class="rounded-md bg-primary-300 p-4">
		  <div class="flex items-center justify-between">
			<div class="flex items-center space-x-2">
			  <svg class="h-6 w-6 text-accent-cyan" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
			  </svg>
			  <span class="text-secondary">{selectedFile.name}</span>
			</div>
			<button 
			  type="button"
			  onclick={() => selectedFile = null}
			  class="text-secondary-400 hover:text-secondary-200 transition-colors"
			>
			  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			  </svg>
			</button>
		  </div>
		</div>
	  {/if}
  
	  <div class="flex justify-end gap-3 pt-4">
		<button
		  type="submit"
		  disabled={!selectedFile}
		  class="rounded-md bg-accent-cyan px-4 py-2 text-primary transition-colors hover:bg-accent-cyan-dark
				 disabled:opacity-50 disabled:cursor-not-allowed"
		>
		  Upload Demo
		</button>
	  </div>
	</form>
  </Modal>