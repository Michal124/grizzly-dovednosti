<script lang="ts">
	import TextSection from '../../components/body/TextSection.svelte';
	import AmbulancniUzel1 from '../../components/ilustrations/AmbulancniUzel1.svelte';
	import AmbulancniUzel2 from '../../components/ilustrations/AmbulancniUzel2.svelte';
	import AmbulancniUzel3 from '../../components/ilustrations/AmbulancniUzel3.svelte';
	import DraciSmycka1 from '../../components/ilustrations/DraciSmycka1.svelte';
	import DraciSmycka2 from '../../components/ilustrations/DraciSmycka2.svelte';
	import DraciSmycka3 from '../../components/ilustrations/DraciSmycka3.svelte';
</script>

<svelte:head>
	<title>Dračí smyčka</title>
</svelte:head>

<TextSection>
	<h1 class="font-bold text-4xl mb-4">Dračí smyčka</h1>
	<p class="max-w-lg mb-2">
		Kdysi se používala v horolezectví, ale nyní se už nepovažuje za bezpečný. V horolezectví jej
		nahradil osmičkový uzel.
	</p>
	<p class="max-w-lg">
		Postup se dá zapamatovat říkankou: V hlubokém jezeře žil drak. Když uviděl na břehu princeznu,
		vystoupil z vody, obtočil se kolem ní a snažil se ji stáhnout k sobě do jezera.
	</p>
	<DraciSmycka3 slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<TextSection>
	<h1 class="font-bold text-4xl mb-4">Postup 1/2</h1>
	<p class="max-w-lg">Vytvoří se smyčka nad lanem a konec lana se protáhne skrz.</p>
	<DraciSmycka1 slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<TextSection>
	<h1 class="font-bold text-4xl mb-4">Postup 2/2</h1>
	<p class="max-w-lg">
		Nahoře se vytvoří smyčka pod lanem a konec lana se protáhne skrz první smyčku.
	</p>
	<DraciSmycka2 slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
