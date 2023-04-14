<script lang="ts">
	import TextSection from '../../components/body/TextSection.svelte';
	import Card from '../../components/generator/Card.svelte';
	import BigPolishCrossSolution from '../../components/ilustrations/BigPolishCrossSolution.svelte';
	import SmallPolishCross from '../../components/ilustrations/SmallPolishCross.svelte';
	import SmallPolishCrossSolution from '../../components/ilustrations/SmallPolishCrossSolution.svelte';

	let text: string = '';

	const remove = () => {
		text = '';
	};
</script>

<svelte:head>
	<title>Malý kříž</title>
</svelte:head>

<TextSection>
	<h1 class="font-bold text-4xl mb-4">Malý kříž</h1>
	<p class="max-w-lg mb-2">Písmena jsou rozmístěna do 4 tabulek.</p>
	<p class="max-w-lg">
		Pozice písmene se určuje podle tvaru znaku a taky podle toho, jestli obsahuje tečku, nebo ne.
	</p>
	<SmallPolishCross slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<TextSection>
	<h1 class="font-bold text-4xl mb-4">Řešení</h1>
	<p class="max-w-lg mb-2">
		Šifra se skládá ze 2 tabulek 3x3 a dvou křížů, každý z nich má 4 písmena.
	</p>
	<p class="max-w-lg mb-2">
		Písmena jsou rozdělena první do tabulky 3x3, pak tabulky 3x3 s tečkou, kříže a nakonec kříže s
		tečkou.
	</p>
	<p class="max-w-lg">
		Do kříže se písmena rozdělují tak, že se začně nahoře a pokračuje se po směru hodinových
		ručiček.
	</p>
	<SmallPolishCrossSolution slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
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
			<Card on:click={remove} details={{ typ: 'Malý kříž', text }} />
		</div>
	{/if}
</section>
