<script lang="ts">
	import { onMount } from 'svelte';
	import TextSection from '../../components/body/TextSection.svelte';
	import Phone from '../../components/ilustrations/Phone.svelte';

	let deferredPrompt: any = null;
	let error = false;

	onMount(() => {
		window.addEventListener('beforeinstallprompt', (e) => {
			console.log('beforeinstallprompt event triggered');
			e.preventDefault();
			deferredPrompt = e;
		});
	});
</script>

<svelte:head>
	<title>Aplikace</title>
	<meta name="description" content="Stažení aplikace, zpřístupnění obsahu offline." />
</svelte:head>

<TextSection>
	<h1 class="font-bold text-4xl mb-4">Aplikace</h1>
	<p class="max-w-lg mb-2">
		Pokud se vám tahle stránku líbí, můžete si ji stáhnout a mít možnost ji používat offline.
	</p>
	<p class="max-w-lg mb-2">
		Tato aplikace byla otestována na prohlížečích Chrom a Firefox, není zaručená funkčnost na
		dalších prohlížečích.
	</p>

	{#if error}
		<p class="max-w-lg">
			Aplikaci se nepodařilo stáhnout, můžete zkusit přejít do menu prohlížeče (většinou 3 tečky) a
			kliknout na instalovat.
		</p>
	{:else}
		<button
			href="/aplikace"
			on:click={() => {
				if (deferredPrompt !== null) deferredPrompt.prompt();
				else error = true;
			}}
			class="block mt-6 w-fit px-4 py-2 bg-green-500 text-white text-sm rounded-md">Stáhnout</button
		>
	{/if}

	<Phone slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>
