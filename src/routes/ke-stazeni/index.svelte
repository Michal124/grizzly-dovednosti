<script lang="ts">
	import TextSection from '../../components/body/TextSection.svelte';

	import Item from '../../components/download/Item.svelte';
	import Paper from '../../components/ilustrations/Paper.svelte';
</script>

<svelte:head>
	<title>Ke stažení</title>
</svelte:head>

<TextSection>
	<h1 class="font-bold text-4xl mb-4">Ke stažení</h1>
	<p class="max-w-lg">
		Poskytujeme vám k použití řadu věcí z našich stránek, pokud chcete obsah používat mimo vlastní
		užití, přečtěte si prosím právní informace.
	</p>
	<Paper slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>

<Item href="/pravni-informace">Právní informace</Item>
<Item href="/ke-stazeni/sifry-fonty">Šifry (fonty)</Item>
<Item href="/ke-stazeni/uzly-obrazky">Uzly (obrázky)</Item>
<Item href="/ke-stazeni/dalsi-ilustrace">Další ilustrace</Item>
