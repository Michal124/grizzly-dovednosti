<script lang="ts">
	import Card from '../components/section/Card.svelte';
	import Tent from '../components/ilustrations/Tent.svelte';
	import Carabine from '../components/ilustrations/Carabine.svelte';
	import Phone from '../components/ilustrations/Phone.svelte';
	import Backpack from '../components/ilustrations/Backpack.svelte';
	import Paper from '../components/ilustrations/Paper.svelte';
</script>

<svelte:head>
	<title>Grizzly nástroje</title>
	<meta
		name="description"
		content="Návody pokrývající uzly, šifry a tábornické dovednosti. Vše jednoduše vysvětlené s obrázky."
	/>
	<meta name="google-site-verification" content="UdCcWE3nIGXfpi6rdTgaq46KS3SfK2r-wQuhptBVrpY" />
</svelte:head>

<section class="h-screen flex items-center justify-center flex-col relative">
	<Tent styling="mb-20 max-w-lg" />
	<h1 class="font-bold text-4xl mb-4 text-center">Dovednosti pro vaše dobrodružství</h1>
	<h2 class="font-bold text-stone-700 dark:text-stone-300 text-3xl text-center">
		a další vychytávky
	</h2>
</section>
<section>
	<h1 class="font-bold text-4xl mb-4 text-center">Co tady najdete?</h1>
	<div class="flex justify-center flex-wrap">
		<Card href="/uzly">
			<Carabine styling="mb-5" />
			<h2 class="font-bold text-2xl mb-2 text-center w-52">Uzly</h2>
			<ul class="text-center">
				<li>5 různě náročných uzlů</li>
				<li>Ilustrovaný postup</li>
			</ul>
		</Card>
		<Card href="/sifry">
			<Paper styling="mb-5" />
			<h2 class="font-bold text-2xl mb-2 text-center w-52">Šifry</h2>
			<ul class="text-center">
				<li>Generátor šifer</li>
				<li>7 šifer</li>
			</ul>
		</Card>
		<Card href="/aplikace">
			<Phone styling="mb-5" />
			<h2 class="font-bold text-2xl mb-2 text-center w-52">Aplikace</h2>
			<ul class="text-center">
				<li>Nástroje dostupné offline</li>
				<li>Stažitelná na plochu</li>
			</ul>
		</Card>
	</div>
</section>
