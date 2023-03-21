<script lang="ts">
	export let href: string;
	export let download: string | undefined = undefined;
</script>

{#if download}
	<a
		{href}
		{download}
		class="border-b border-stone-400 dark:border-stone-600 w-full block mb-2 pb-2 last:border-0 last:mb-0"
		><slot /></a
	>
{:else}
	<a
		{href}
		class="border-b border-stone-400 dark:border-stone-600 w-full block mb-2 pb-2 last:border-0 last:mb-0"
		><slot /></a
	>
{/if}
