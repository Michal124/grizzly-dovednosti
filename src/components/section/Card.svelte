<script lang="ts">
	export let href: string = './';
</script>

<article>
	<a
		{href}
		class="bg-transparent m-4 border-2 rounded-lg border-stone-300 dark:border-stone-400 hover:border-green-500 p-8 flex flex-col items-center transition-shadow"
	>
		<slot />
	</a>
</article>
