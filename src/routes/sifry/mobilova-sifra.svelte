<script lang="ts">
	import TextSection from '../../components/body/TextSection.svelte';
	import Card from '../../components/generator/Card.svelte';
	import PhoneOld from '../../components/ilustrations/PhoneOld.svelte';
	import PhoneOldSolution from '../../components/ilustrations/PhoneOldSolution.svelte';

	let text: string = '';

	const remove = () => {
		text = '';
	};
</script>

<svelte:head>
	<title>Mobilová šifra</title>
</svelte:head>

<TextSection>
	<h1 class="font-bold text-4xl mb-4">Mobilová šifra</h1>
	<p class="max-w-lg mb-2">Funguje na principu starého telefonu.</p>
	<p class="max-w-lg mb-2">
		Používají se čísla, která představují tlačítka na starém telefonu, podle toho, kolikrát se
		zmáčkne tlačítko, takové písmeno se zobrazí.
	</p>
	<p class="max-w-lg">
		Abychom ušetřili místo, používá náš font místo několika čísel vždy číslo a počet teček.
	</p>
	<PhoneOld slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<TextSection>
	<h1 class="font-bold text-4xl mb-4">Řešení</h1>
	<p class="max-w-lg mb-2">Písmena začínají od čísla 2.</p>
	<p class="max-w-lg mb-2">Každé tlačítko má 3 písmena, kromě 7 a 9, které mají 4.</p>
	<p class="max-w-lg">Jako mezera se může použít číslo 1, nebo prostě vynechání místa.</p>
	<PhoneOldSolution slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<section>
	<textarea
		bind:value={text}
		class="block resize-y w-full bg-transparent border border-stone-400 rounded-lg p-8"
		name="sifra"
		id="sifra"
		rows="5"
		placeholder="Tady zadejte text šifry..."
	/>
	{#if text.length > 0}
		<div class="mt-10">
			<Card on:click={remove} details={{ typ: 'Mobilová šifra', text }} />
		</div>
	{/if}
</section>
