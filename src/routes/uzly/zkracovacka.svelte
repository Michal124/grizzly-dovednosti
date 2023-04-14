<script lang="ts">
	import TextSection from '../../components/body/TextSection.svelte';
	import Zkracovacka1 from '../../components/ilustrations/Zkracovacka1.svelte';
	import Zkracovacka2 from '../../components/ilustrations/Zkracovacka2.svelte';
	import Zkracovacka3 from '../../components/ilustrations/Zkracovacka3.svelte';
</script>

<svelte:head>
	<title>Zkracovačka</title>
</svelte:head>

<TextSection>
	<h1 class="font-bold text-4xl mb-4">Zkracovačka</h1>
	<p class="max-w-lg mb-2">Uzel, který slouží ke zkrácení lana.</p>
	<p class="max-w-lg">
		Aby zkracovačka držela pevně, musí být lano napnuté, při moc malé/velké zátěži se uzel rozváže.
	</p>
	<Zkracovacka3 slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<TextSection>
	<h1 class="font-bold text-4xl mb-4">Postup 1/2</h1>
	<p class="max-w-lg">
		Na laně uděláme 3 smyčky (začátek smyčky je pod jejím koncem), které přeložíme přes sebe tak, že
		smyčka vlevo je vždy nad smyčkou vpravo.
	</p>
	<Zkracovacka1 slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<TextSection>
	<h1 class="font-bold text-4xl mb-4">Postup 2/2</h1>
	<p class="max-w-lg">Vezmeme prostřední smyčku a prostrčíme ji krajními smyčkami.</p>
	<Zkracovacka2 slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
