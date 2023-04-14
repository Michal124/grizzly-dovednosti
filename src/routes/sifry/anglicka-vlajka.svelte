<script lang="ts">
	import TextSection from '../../components/body/TextSection.svelte';
	import Card from '../../components/generator/Card.svelte';
	import Web from '../../components/ilustrations/Web.svelte';

	let text: string = '';

	const remove = () => {
		text = '';
	};

	const alphabet = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z'
	];
</script>

<svelte:head>
	<title>Anglická vlajka</title>
</svelte:head>

<TextSection>
	<h1 class="font-bold text-4xl mb-4">Anglická vlajka</h1>
	<p class="max-w-lg mb-2">Vynechané čáry v mřížce znázorňují písmena.</p>
	<p class="max-w-lg mb-2">
		Podle tvaru mřížky se šifra jmenuje Anglická vlajka, můžete se ale setkat i s názvem pavučina.
	</p>
	<p class="max-w-lg">Šifra se dá lehce vyřešit domalováním zbylých čar jinou barvou.</p>
	<Web slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
<TextSection>
	<div class="block lg:flex">
		<table class="w-full flex-1 mb-5 border-r lg:border-r-0 border-black dark:border-white">
			<tr class="w-full flex">
				{#each alphabet.slice(0, 7) as letter}
					<th class="border-l border-t border-b border-black dark:border-white flex-1">{letter}</th>
				{/each}
			</tr>
			<tr class="w-full flex">
				{#each alphabet.slice(0, 7) as letter}
					<th
						class="font-anglicka_vlajka font-normal border-l border-b border-black dark:border-white flex-1"
						>{letter}</th
					>
				{/each}
			</tr>
		</table>
		<table class="w-full flex-1 mb-5 border-r lg:border-r-0 border-black dark:border-white">
			<tr class="w-full flex">
				{#each alphabet.slice(7, 14) as letter}
					<th class="border-l border-t border-b border-black dark:border-white flex-1">{letter}</th>
				{/each}
			</tr>
			<tr class="w-full flex">
				{#each alphabet.slice(7, 14) as letter}
					<th
						class="font-anglicka_vlajka font-normal border-l border-b border-black dark:border-white flex-1"
						>{letter}</th
					>
				{/each}
			</tr>
		</table>
		<table class="w-full flex-1 mb-5">
			<tr class="w-full flex">
				{#each alphabet.slice(14, 20) as letter}
					<th class="border-l border-t border-b border-black dark:border-white flex-1">{letter}</th>
				{/each}
				<div class="border-l border-black dark:border-white flex-1 lg:hidden" />
			</tr>
			<tr class="w-full flex">
				{#each alphabet.slice(14, 20) as letter}
					<th
						class="font-anglicka_vlajka font-normal border-l border-b border-black dark:border-white flex-1"
						>{letter}</th
					>
				{/each}
				<div class="border-l border-black dark:border-white flex-1 lg:hidden" />
			</tr>
		</table>
		<table class="w-full flex-1 mb-5 lg:border-r border-black dark:border-white">
			<tr class="w-full flex">
				{#each alphabet.slice(20, 26) as letter}
					<th class="border-l border-t border-b border-black dark:border-white flex-1">{letter}</th>
				{/each}
				<div class="border-l border-black dark:border-white flex-1 lg:hidden" />
			</tr>
			<tr class="w-full flex">
				{#each alphabet.slice(20, 26) as letter}
					<th
						class="font-anglicka_vlajka font-normal border-l border-b border-black dark:border-white flex-1"
						>{letter}</th
					>
				{/each}
				<div class="border-l border-black dark:border-white flex-1 lg:hidden" />
			</tr>
		</table>
	</div>
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
			<Card on:click={remove} details={{ typ: 'Anglická vlajka', text }} />
		</div>
	{/if}
</section>
