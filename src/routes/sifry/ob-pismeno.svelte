<script lang="ts">
	import TextSection from '../../components/body/TextSection.svelte';
	import Card from '../../components/generator/Card.svelte';
	import SkipOne from '../../components/ilustrations/SkipOne.svelte';

	let text: string = '';
	let transformed: string = '';

	const remove = () => {
		text = '';
	};

	const alphabet = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z'
	];

	const transform = (text: string) => {
		transformed = text
			.split('')
			.map((x, i, arr) =>
				x !== ' ' && arr[i + 1] !== ' ' && arr[i + 1] !== undefined
					? x + alphabet[getRandomInt(0, alphabet.length - 1)]
					: x
			)
			.join('');
	};

	const getRandomInt = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	$: transform(text);
</script>

<svelte:head>
	<title>Ob písmeno</title>
</svelte:head>

<TextSection>
	<h1 class="font-bold text-4xl mb-4">Ob písmeno</h1>
	<p class="max-w-lg mb-2">Mezi písmena se přidají náhodná písmena.</p>
	<p class="max-w-lg">Řeší se přeskočením vždy jednoho písmene.</p>
	<SkipOne slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<section>
	<textarea
		bind:value={text}
		class="block resize-y w-full bg-transparent border border-stone-400 rounded-lg p-8"
		name="sifra"
		id="sifra"
		rows="5"
		placeholder="Tady zadejte text šifry..."
	/>
	{#if text.length > 0}
		<div class="mt-10">
			<Card on:click={remove} details={{ typ: 'Ob písmeno', text: transformed, source: text }} />
		</div>
	{/if}
</section>
