<script lang="ts">
	import TextSection from '../../components/body/TextSection.svelte';
	import AmbulancniUzel1 from '../../components/ilustrations/AmbulancniUzel1.svelte';
	import AmbulancniUzel2 from '../../components/ilustrations/AmbulancniUzel2.svelte';
	import AmbulancniUzel3 from '../../components/ilustrations/AmbulancniUzel3.svelte';
	import SkotovaSpojka1 from '../../components/ilustrations/SkotovaSpojka1.svelte';
	import SkotovaSpojka2 from '../../components/ilustrations/SkotovaSpojka2.svelte';
	import SkotovaSpojka3 from '../../components/ilustrations/SkotovaSpojka3.svelte';
</script>

<svelte:head>
	<title>Škotová spojka</title>
</svelte:head>

<TextSection>
	<h1 class="font-bold text-4xl mb-4">Škotová spojka</h1>
	<p class="max-w-lg mb-2">Dříve se používala na vázání škotové plachty.</p>
	<p class="max-w-lg mb-2">
		S uzlem jde svázat i lana různých průměrů, v tahu se uzel více dotahuje.
	</p>
	<p class="max-w-lg">Snadno se rozvazuje a neničí lana.</p>
	<SkotovaSpojka3 slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<TextSection>
	<h1 class="font-bold text-4xl mb-4">Postup 1/2</h1>
	<p class="max-w-lg mb-2">Jedno lano se ohne vejpůl.</p>
	<p class="max-w-lg">Druhé lano se provlékne ohybem a pod prvním lanem.</p>
	<SkotovaSpojka1 slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<TextSection>
	<h1 class="font-bold text-4xl mb-4">Postup 2/2</h1>
	<p class="max-w-lg">Nakonec se druhé lano provlékne nad prvním a pod sebou samým.</p>
	<SkotovaSpojka2 slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
