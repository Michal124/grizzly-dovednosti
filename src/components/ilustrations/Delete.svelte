<script lang="ts">
	export let styling: string = '';
</script>

<svg
	class={styling + ' text-stone-700 hover:text-black dark:text-stone-400'}
	width="18"
	height="18"
	viewBox="0 0 18 18"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	on:click
>
	<path d="M1 17L17 1Z" fill="white" />
	<path d="M17 17L1 1Z" fill="white" />
	<path
		d="M1 17L17 1M17 17L1 1"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
