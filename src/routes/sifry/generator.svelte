<script lang="ts">
	import TextSection from '../../components/body/TextSection.svelte';
	import Card from '../../components/generator/Card.svelte';
	import Processor from '../../components/ilustrations/Processor.svelte';
	import pdfMake from 'pdfmake/build/pdfmake.js';

	pdfMake.fonts = {
		MobilovaSifra: {
			normal: 'https://grizzly-dovednosti.web.app/fonts/Mobilova-Sifra.ttf'
		},
		MalyKriz: {
			normal: 'https://grizzly-dovednosti.web.app/fonts/Maly-Kriz.ttf'
		},
		VelkyKriz: {
			normal: 'https://grizzly-dovednosti.web.app/fonts/Velky-Kriz.ttf'
		},
		Pozpatku: {
			normal: 'https://grizzly-dovednosti.web.app/fonts/Pozpatku.ttf'
		},
		OJednoPismeno: {
			normal: 'https://grizzly-dovednosti.web.app/fonts/O-Jedno-Pismeno.ttf'
		},
		AnglickaVlajka: {
			normal: 'https://grizzly-dovednosti.web.app/fonts/Anglicka-Vlajka.ttf'
		},
		Inter: {
			normal: 'https://grizzly-dovednosti.web.app/fonts/Inter-Regular.ttf'
		}
	};

	let typ: string;
	let text: string;
	let sifry: { text: string; typ: string; source?: string }[] = [];

	const add = () => {
		if (text.length > 0) {
			if (typ === 'Ob písmeno') {
				sifry = [...sifry, { typ, text: transform(text, typ), source: text }];
				text = '';
			} else {
				sifry = [...sifry, { typ, text }];
				text = '';
			}
		}
	};

	const remove = (i: number) => {
		const result = [...sifry];
		result.splice(i, 1);
		sifry = result;
	};

	const fontDictionary = {
		'Mobilová šifra': 'MobilovaSifra',
		'Malý kříž': 'MalyKriz',
		'Velký kříž': 'VelkyKriz',
		'Pozpátku abeceda': 'Pozpatku',
		'O jedno písmeno': 'OJednoPismeno',
		'Anglická vlajka': 'AnglickaVlajka'
	};

	const convert = () => {
		const answers = sifry.map((x) => {
			return { text: `${x.source ? x.source : x.text} (${x.typ})` };
		});
		const texts = sifry.map((x) => {
			//@ts-ignore
			return { text: x.text, font: fontDictionary[x.typ], lineHeight: 2.5 };
		});

		const content: any[] = [{ ol: answers }, { text: '\n\n', lineHeight: 1 }, { ol: texts }];

		pdfMake
			.createPdf({
				info: {
					title: 'Šifry'
				},
				content,
				defaultStyle: {
					font: 'Inter',
					lineHeight: 1.5
				}
			})
			.download();
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

	const transform = (text: string, typ: string) => {
		if (typ === 'Ob písmeno') {
			text = text
				.split('')
				.map((x, i, arr) =>
					x !== ' ' && arr[i + 1] !== ' ' && arr[i + 1] !== undefined
						? x + alphabet[getRandomInt(0, alphabet.length - 1)]
						: x
				)
				.join('');
		}
		return text;
	};

	const getRandomInt = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
</script>

<svelte:head>
	<title>Generátor šifer</title>
</svelte:head>

<TextSection>
	<h1 class="font-bold text-4xl mb-4">Generátor</h1>
	<p class="max-w-lg mb-2">Generátor je nástroj vyvinutý pro jednoduché šifrování.</p>
	<p class="max-w-lg mb-2">
		Zadejte text, který si přejete zašifrovat, potom klikněte na tlačítko šifrovat, výsledek se
		zobrazí dole.
	</p>
	<p class="max-w-lg">Až budete s prací hotoví, můžete ji vytisknout.</p>
	<Processor slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<section>
	<select
		name="typ-sifry"
		id="typ-sifry"
		bind:value={typ}
		class="bg-transparent border border-stone-400 text-sm rounded-md px-4 py-2 mb-2"
	>
		<option value="Mobilová šifra">Mobilová šifra</option>
		<option value="Malý kříž">Malý kříž</option>
		<option value="Velký kříž">Velký kříž</option>
		<option value="Mobilová šifra">Mobilová šifra</option>
		<option value="Pozpátku abeceda">Pozpátku abeceda</option>
		<option value="O jedno písmeno">O jedno písmeno</option>
		<option value="Ob písmeno">Ob písmeno</option>
		<option value="Anglická vlajka">Anglická vlajka</option>
	</select>
	<textarea
		bind:value={text}
		class="block resize-y w-full bg-transparent mb-4 border border-stone-400 rounded-lg p-8"
		name="sifra"
		id="sifra"
		rows="5"
		placeholder="Tady zadejte text šifry..."
	/>
	<button
		on:click={add}
		class="block ml-auto w-fit px-4 py-2 bg-green-500 text-white text-sm rounded-md"
		>Zašifrovat</button
	>
	{#if sifry.length > 0}
		<div class="mt-10">
			{#each sifry as sifra, i}
				<Card on:click={() => remove(i)} details={sifra} />
			{/each}
		</div>
		<button
			on:click={convert}
			class="block ml-auto w-fit px-4 py-2 bg-green-500 text-white text-sm rounded-md mt-4"
			>Vytisknout</button
		>
	{/if}
</section>
