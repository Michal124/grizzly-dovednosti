<script lang="ts">
	import Carabine from '../../components/ilustrations/Carabine.svelte';
	import Card from '../../components/section/Card.svelte';
	import TextSection from '../../components/body/TextSection.svelte';
	import LodniSmycka4 from '../../components/ilustrations/LodniSmycka4.svelte';
	import LisciSmycka2 from '../../components/ilustrations/LisciSmycka2.svelte';
	import AmbulancniUzel3 from '../../components/ilustrations/AmbulancniUzel3.svelte';
	import Zkracovacka3 from '../../components/ilustrations/Zkracovacka3.svelte';
	import SkotovaSpojka3 from '../../components/ilustrations/SkotovaSpojka3.svelte';
	import RybarskaSpojka2 from '../../components/ilustrations/RybarskaSpojka2.svelte';
	import DraciSmycka3 from '../../components/ilustrations/DraciSmycka3.svelte';
</script>

<svelte:head>
	<title>Uzly</title>
	<meta name="description" content="Ilustrované návody na uzly, jednoduše krok po kroku." />
</svelte:head>

<TextSection>
	<h1 class="font-bold text-4xl mb-4">Uzly</h1>
	<p class="max-w-lg mb-2">
		Když se řekne slovo uzly, některým se může vybavit například horolezectví, ale uzly mají mnohem
		více využití než jen při horolezectví.
	</p>
	<p class="max-w-lg">
		Několik základních uzlů najdete na této stránce, když si je rozkliknete, najdete u nich i postup
		a jednoduchý popis.
	</p>
	<Carabine slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<h1 class="font-bold text-4xl mb-4 text-center">Co tady najdete?</h1>
<div class="max-w-5xl mx-auto flex justify-center flex-wrap">
	<Card href="/uzly/lisci-smycka">
		<LisciSmycka2 styling="mb-5" />
		<h2 class="font-bold text-2xl mb-2 text-center w-52">Liščí smyčka</h2>
		<ul class="text-center">
			<li>Rychlá, ale pevná</li>
			<li>Jednoduchá obtížnost</li>
		</ul>
	</Card>
	<Card href="/uzly/lodni-smycka">
		<LodniSmycka4 styling="mb-5" />
		<h2 class="font-bold text-2xl mb-2 text-center w-52">Lodní smyčka</h2>
		<ul class="text-center">
			<li>Známá jako "Loďák"</li>
			<li>Jednoduchá obtížnost</li>
		</ul>
	</Card>
	<Card href="/uzly/ambulancni-uzel">
		<AmbulancniUzel3 styling="mb-5" />
		<h2 class="font-bold text-2xl mb-2 text-center w-52">Ambulanční uzel</h2>
		<ul class="text-center">
			<li>Známý jako "Plochý uzel"</li>
			<li>Jednoduchá obtížnost</li>
		</ul>
	</Card>
	<Card href="/uzly/zkracovacka">
		<Zkracovacka3 styling="mb-5" />
		<h2 class="font-bold text-2xl mb-2 text-center w-52">Zkracovačka</h2>
		<ul class="text-center">
			<li>Slouží pro zkrácení lana</li>
			<li>Střední obtížnost</li>
		</ul>
	</Card>
	<Card href="/uzly/skotova-spojka">
		<SkotovaSpojka3 styling="mb-5" />
		<h2 class="font-bold text-2xl mb-2 text-center w-52">Škotová spojka</h2>
		<ul class="text-center">
			<li>Jeden z nejpevnějších uzlů</li>
			<li>Jednoduchá obtížnost</li>
		</ul>
	</Card>
	<Card href="/uzly/rybarska-spojka">
		<RybarskaSpojka2 styling="mb-5" />
		<h2 class="font-bold text-2xl mb-2 text-center w-52">Rybářská spojka</h2>
		<ul class="text-center">
			<li>Známá jako "Autíčka"</li>
			<li>Jednoduchá obtížnost</li>
		</ul>
	</Card>
	<Card href="/uzly/draci-smycka">
		<DraciSmycka3 styling="mb-5" />
		<h2 class="font-bold text-2xl mb-2 text-center w-52">Dračí smyčka</h2>
		<ul class="text-center">
			<li>Jeden ze záklandích uzlů</li>
			<li>Těžká obtížnost</li>
		</ul>
	</Card>
</div>
