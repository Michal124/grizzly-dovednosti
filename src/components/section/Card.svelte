<script lang="ts">
	export let href: string = './';
</script>

<article>
	<a
		{href}
		class="bg-transparent m-4 shadow-md dark:shadow-none hover:shadow-lg hover:shadow-slate-500 shadow-slate-400 rounded-lg dark:border dark:border-stone-400 dark:hover:border-green-500 p-8 flex flex-col items-center transition-shadow"
	>
		<slot />
	</a>
</article>
