<script lang="ts">
	import TextSection from '../../components/body/TextSection.svelte';
	import LodniSmycka1 from '../../components/ilustrations/LodniSmycka1.svelte';
	import LodniSmycka2 from '../../components/ilustrations/LodniSmycka2.svelte';
	import LodniSmycka3 from '../../components/ilustrations/LodniSmycka3.svelte';
	import LodniSmycka4 from '../../components/ilustrations/LodniSmycka4.svelte';
</script>

<svelte:head>
	<title>Lodní smyčka</title>
</svelte:head>

<TextSection>
	<h1 class="font-bold text-4xl mb-4">Lodní smyčka</h1>
	<p class="max-w-lg mb-2">Známá taky jako lodní uzel, nebo loďák.</p>
	<p class="max-w-lg mb-2">
		Používá se pro ryché připevnění lodě k molu, v horolezectví, ale i dalších oborech.
	</p>
	<p class="max-w-lg">Někdy má tendenci prokluzovat, proto je lepší ji pojistit dalším uzlem.</p>
	<LodniSmycka4 slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<TextSection>
	<h1 class="font-bold text-4xl mb-4">Postup 1/3</h1>
	<p class="max-w-lg mb-2">Připravte si nějakou tyčku.</p>
	<p class="max-w-lg">
		Obtočte lano tak, jak je nakresleno na obrázku (konec lana musí být pod jeho začátkem).
	</p>
	<LodniSmycka1 slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<TextSection>
	<h1 class="font-bold text-4xl mb-4">Postup 2/3</h1>
	<p class="max-w-lg">
		Nyní lano obmotejte nad první smyčkou tak, aby konec lana byl nad jeho začátkem (naopak než
		dole).
	</p>
	<LodniSmycka2 slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<TextSection>
	<h1 class="font-bold text-4xl mb-4">Postup 3/3</h1>
	<p class="max-w-lg">
		Nakonec lano podstrčte pod lanem, které spojuje dolní a horní smyčku a utáhněte.
	</p>
	<LodniSmycka3 slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
