<script lang="ts">
	export let href: string;
	export let active: boolean;
</script>

{#if active}
	<a
		{href}
		on:click
		class="text-black dark:text-white relative font-medium text-sm px-4 py-2 box-border"
		><slot />
		<div
			class="absolute top-11 right-1/2 translate-x-1/2 h-1 w-full bg-green-500 hidden md:block"
		/>
		<div class="absolute top-0 left-0 h-full w-1 bg-green-500 block md:hidden" /></a
	>
{:else}
	<a
		{href}
		on:click
		class="text-stone-700 hover:text-black dark:text-stone-300 font-medium text-sm px-4 py-2"
		><slot /></a
	>
{/if}
