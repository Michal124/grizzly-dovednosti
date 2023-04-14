<script lang="ts">
	import TextSection from '../../components/body/TextSection.svelte';
	import Card from '../../components/generator/Card.svelte';
	import BigPolishCross from '../../components/ilustrations/BigPolishCross.svelte';
	import BigPolishCrossSolution from '../../components/ilustrations/BigPolishCrossSolution.svelte';

	let text: string = '';

	const remove = () => {
		text = '';
	};
</script>

<svelte:head>
	<title>Velký kříž</title>
</svelte:head>

<TextSection>
	<h1 class="font-bold text-4xl mb-4">Velký kříž</h1>
	<p class="max-w-lg mb-2">Písmena jsou rozmístěna do tabulky 3x3.</p>
	<p class="max-w-lg">
		Pozice písmene se určuje podle čtverce vyřízlého z tabulky a podle tečky, která je vlevo,
		uprostřed, nebo vpravo.
	</p>
	<BigPolishCross slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<TextSection>
	<h1 class="font-bold text-4xl mb-4">Řešení</h1>
	<p class="max-w-lg mb-2">Každý čtvereček v tabulce obsahuje 3 písmena.</p>
	<p class="max-w-lg mb-2">
		Tečka ve čtverečku určuje, které písmeno je řešením (vlevo, uprostřed, vpravo).
	</p>
	<p class="max-w-lg font-bold">
		Do řešení jsme nezahrnuli CH, které se normálně vyskytuje vedle H, je to proto, že ho náš font
		neumí (napíše C a H zvlášť).
	</p>
	<BigPolishCrossSolution slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
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
			<Card on:click={remove} details={{ typ: 'Velký kříž', text }} />
		</div>
	{/if}
</section>
