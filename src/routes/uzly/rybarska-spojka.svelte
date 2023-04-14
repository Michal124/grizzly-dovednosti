<script lang="ts">
	import TextSection from '../../components/body/TextSection.svelte';
	import RybarksaSpojka1 from '../../components/ilustrations/RybarksaSpojka1.svelte';
	import RybarskaSpojka2 from '../../components/ilustrations/RybarskaSpojka2.svelte';
</script>

<svelte:head>
	<title>Rybářská spojka</title>
</svelte:head>

<TextSection>
	<h1 class="font-bold text-4xl mb-4">Rybářská spojka</h1>
	<p class="max-w-lg mb-2">Známá taky jako "Autíčka".</p>
	<p class="max-w-lg mb-2">
		Slouží pro spojení dvou podobných lan. Používá se při navazování vlasce u rybaření, odtud
		získala svůj název.
	</p>
	<p class="max-w-lg">Pro horolezectví je tento uzel nevhodný.</p>
	<RybarskaSpojka2 slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<TextSection>
	<h1 class="font-bold text-4xl mb-4">Postup 1/1</h1>
	<p class="max-w-lg mb-2">Budete potřebovat 2 lana.</p>
	<p class="max-w-lg">
		Lano se provleče pod druhým lanem, potom se vrátí vrchem (obtočí se okolo druhého lana a sama
		sebe) a potom se prostrčí zespodu vzniklou smyčkou.
	</p>
	<RybarksaSpojka1 slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
