<script lang="ts">
	import TextSection from '../../components/body/TextSection.svelte';
	import AmbulancniUzel1 from '../../components/ilustrations/AmbulancniUzel1.svelte';
	import AmbulancniUzel2 from '../../components/ilustrations/AmbulancniUzel2.svelte';
	import AmbulancniUzel3 from '../../components/ilustrations/AmbulancniUzel3.svelte';
</script>

<svelte:head>
	<title>Ambulanční uzel</title>
</svelte:head>

<TextSection>
	<h1 class="font-bold text-4xl mb-4">Ambulanční uzel</h1>
	<p class="max-w-lg mb-2">Známý též jako ambulanční spojka nebo plochý uzel.</p>
	<p class="max-w-lg mb-2">
		Jeho využití najdete třeba při svazování dvou konců obvazů (např. trojcípý šátek). Pro použítí v
		horolezectví je kvůli typů horolezeckých lan nevhodný až nebezpečný (prokluzuje).
	</p>
	<p class="max-w-lg">Snadno se pamatuje: Pravá přes levou a pod, potom levá přes pravou a pod.</p>
	<AmbulancniUzel3 slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<TextSection>
	<h1 class="font-bold text-4xl mb-4">Postup 1/2</h1>
	<p class="max-w-lg mb-2">
		Budete potřebavat dvě stejná / podobná lana (jde hlavně o materiál a průměr).
	</p>
	<p class="max-w-lg mb-2">Začněte jako s normálním uzlem: Pravá přes levou a pod.</p>
	<p class="max-w-lg">Pokud vám uvázání nejde s "říkankou", můžete si pomoct obrázkem.</p>
	<AmbulancniUzel1 slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<TextSection>
	<h1 class="font-bold text-4xl mb-4">Postup 2/2</h1>
	<p class="max-w-lg">
		Nyní zopakujte to samé nahoře, jenom přehodtě strany: Levá přes pravou a pod.
	</p>
	<AmbulancniUzel2 slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
