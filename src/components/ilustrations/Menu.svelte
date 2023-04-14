<script lang="ts">
	export let styling: string = '';
</script>

<svg
	class={styling + ' text-stone-700 hover:text-black dark:text-stone-400'}
	width="19"
	height="17"
	viewBox="0 0 19 17"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	on:click
>
	<path
		d="M1 1H18M1 8.5H18M1 16H18"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
	/>
</svg>
