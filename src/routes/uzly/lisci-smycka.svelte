<script lang="ts">
	import TextSection from '../../components/body/TextSection.svelte';
	import LisciSmycka1 from '../../components/ilustrations/LisciSmycka1.svelte';
	import LisciSmycka2 from '../../components/ilustrations/LisciSmycka2.svelte';
</script>

<svelte:head>
	<title>Liščí smyčka</title>
</svelte:head>

<TextSection>
	<h1 class="font-bold text-4xl mb-4">Liščí smyčka</h1>
	<p class="max-w-lg mb-2">Jednoduchý, ale pevný uzel.</p>
	<p class="max-w-lg mb-2">
		Používá se na válcovitých předmětech. Například pro připevnění hamaky mezi dva stromy.
	</p>
	<p class="max-w-lg">Aby se nerozvázal, je důležité, aby byly zatížené oba dva konce.</p>
	<LisciSmycka2 slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<TextSection>
	<h1 class="font-bold text-4xl mb-4">Postup 1/1</h1>
	<p class="max-w-lg mb-2">Lano se přehne na půl.</p>
	<p class="max-w-lg">
		Dva konce lana se prostrčí v místě přehybu (lano musí jít okolo nějaké válce, např. strom).
	</p>
	<LisciSmycka1 slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
