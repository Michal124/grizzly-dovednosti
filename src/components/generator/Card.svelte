<script lang="ts">
	import { text } from 'svelte/internal';

	export let details: { text: string; typ: string; source?: string };

	import Delete from '../ilustrations/Delete.svelte';
</script>

<section class="mt-4 border border-stone-400 rounded-lg p-8 flex items-center">
	<div class="flex-1 basis-full min-w-0">
		<h2 class="text-lg mb-1">{details.typ}</h2>
		<p class="w-full overflow-hidden break-words mb-3 text-stone-700 dark:text-stone-400">
			{details.source ? details.source : details.text}
		</p>
		<p
			class={`overflow-hidden break-words text-xl ${
				details.typ === 'Mobilová šifra'
					? 'font-mobilova_sifra'
					: details.typ === 'Malý kříž'
					? 'font-maly_kriz'
					: details.typ === 'Velký kříž'
					? 'font-velky_kriz'
					: details.typ === 'Pozpátku abeceda'
					? 'font-pozpatku'
					: details.typ === 'O jedno písmeno'
					? 'font-o_jedno_pismeno'
					: details.typ === 'Anglická vlajka'
					? 'font-anglicka_vlajka'
					: ''
			}`}
		>
			{details.text}
		</p>
	</div>
	<Delete on:click styling="ml-4" />
</section>
