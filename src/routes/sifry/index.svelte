<script lang="ts">
	import Card from '../../components/section/Card.svelte';
	import TextSection from '../../components/body/TextSection.svelte';
	import Paper from '../../components/ilustrations/Paper.svelte';
	import Processor from '../../components/ilustrations/Processor.svelte';
	import PhoneOld from '../../components/ilustrations/PhoneOld.svelte';
	import Web from '../../components/ilustrations/Web.svelte';
	import SmallPolishCross from '../../components/ilustrations/SmallPolishCross.svelte';
	import BigPolishCross from '../../components/ilustrations/BigPolishCross.svelte';
	import Displacement from '../../components/ilustrations/Displacement.svelte';
	import Reverse from '../../components/ilustrations/Reverse.svelte';
	import SkipOne from '../../components/ilustrations/SkipOne.svelte';
	import Abc from '../../components/ilustrations/ABC.svelte';
</script>

<svelte:head>
	<title>Šifry</title>
	<meta name="description" content="Vysvětlení šifer, generátor šifer." />
</svelte:head>

<TextSection>
	<h1 class="font-bold text-4xl mb-4">Šifry</h1>
	<p class="max-w-lg mb-2">
		Šifry jsou s námi už opravdu dlouho, lidé je používají, aby byly jejich informace utajené, kromě
		toho se dnes dají použít například i pro nějakou hru.
	</p>
	<p class="max-w-lg">
		Na této stránce najdete návod jak luštit různé šifry, plus generátor, který je umí vygenerovat.
	</p>
	<Paper slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<h1 class="font-bold text-4xl mb-4 text-center">Co tady najdete?</h1>
<div class="max-w-5xl mx-auto flex justify-center flex-wrap mb-10">
	<Card href="/sifry/generator">
		<Processor styling="mb-5" />
		<h2 class="font-bold text-2xl mb-2 text-center w-52">Generátor</h2>
		<ul class="text-center">
			<li>Podpora 20 šifer</li>
			<li>Výstup jde vytisknout</li>
		</ul>
	</Card>
	<Card href="/sifry/#textove-sifry">
		<Abc styling="mb-5" />
		<h2 class="font-bold text-2xl mb-2 text-center w-52">Textové šifry</h2>
		<ul class="text-center">
			<li>"Hrátky s abecedou"</li>
			<li>4 šifry</li>
		</ul>
	</Card>
	<Card href="/sifry/#znakove-sifry">
		<BigPolishCross styling="mb-5" />
		<h2 class="font-bold text-2xl mb-2 text-center w-52">Znakové šifry</h2>
		<ul class="text-center">
			<li>Znaky místo písmen</li>
			<li>3 šifry</li>
		</ul>
	</Card>
</div>
<h1 id="textove-sifry" class="font-bold text-4xl mb-4 text-center">Textové šifry</h1>
<div class="max-w-5xl mx-auto flex justify-center flex-wrap mb-10">
	<Card href="/sifry/posunuti-o-1">
		<Displacement styling="mb-5" />
		<h2 class="font-bold text-2xl mb-2 text-center w-52">ABC = BCD</h2>
		<ul class="text-center">
			<li>Posunutí o 1 místo</li>
			<li>Jednoduchá obtížnost</li>
		</ul>
	</Card>
	<Card href="/sifry/pozpatku">
		<Reverse styling="mb-5" />
		<h2 class="font-bold text-2xl mb-2 text-center w-52">ABC = ZYX</h2>
		<ul class="text-center">
			<li>Obrácená abeceda</li>
			<li>Jednoduchá obtížnost</li>
		</ul>
	</Card>
	<Card href="/sifry/ob-pismeno">
		<SkipOne styling="mb-5" />
		<h2 class="font-bold text-2xl mb-2 text-center w-52">Ob písmeno</h2>
		<ul class="text-center">
			<li>Přidání náhodných písmen</li>
			<li>Jednoduchá obtížnost</li>
		</ul>
	</Card>
	<Card href="/sifry/mobilova-sifra">
		<PhoneOld styling="mb-5" />
		<h2 class="font-bold text-2xl mb-2 text-center w-52">Mobilová šifra</h2>
		<ul class="text-center">
			<li>Princip starých telefonů</li>
			<li>Střední obtížnost</li>
		</ul>
	</Card>
</div>
<h1 id="znakove-sifry" class="font-bold text-4xl mb-4 text-center">Znakové šifry</h1>
<div class="max-w-5xl mx-auto flex justify-center flex-wrap">
	<Card href="/sifry/velky-kriz">
		<BigPolishCross styling="mb-5" />
		<h2 class="font-bold text-2xl mb-2 text-center w-52">Velký kříž</h2>
		<ul class="text-center">
			<li>Písmena v mřížce</li>
			<li>Střední obtížnost</li>
		</ul>
	</Card>
	<Card href="/sifry/maly-kriz">
		<SmallPolishCross styling="mb-5" />
		<h2 class="font-bold text-2xl mb-2 text-center w-52">Malý kříž</h2>
		<ul class="text-center">
			<li>Písmena v mřížce</li>
			<li>Střední obtížnost</li>
		</ul>
	</Card>
	<Card href="/sifry/anglicka-vlajka">
		<Web styling="mb-5" />
		<h2 class="font-bold text-2xl mb-2 text-center w-52">Anglická vlajka</h2>
		<ul class="text-center">
			<li>Chybějící čáry v mřížce</li>
			<li>Střední obtížnost</li>
		</ul>
	</Card>
</div>
