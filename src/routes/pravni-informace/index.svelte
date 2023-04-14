<script lang="ts">
	import TextSection from '../../components/body/TextSection.svelte';
	import Item from '../../components/download/Item.svelte';
	import Abc from '../../components/ilustrations/ABC.svelte';
	import Logo from '../../components/ilustrations/Logo.svelte';
	import Paper from '../../components/ilustrations/Paper.svelte';
</script>

<svelte:head>
	<title>Právní informace</title>
</svelte:head>

<TextSection>
	<h1 class="font-bold text-4xl mb-4">Logo</h1>
	<p class="max-w-lg">Logo stránky není dovoleno použít pro komerční, ani osobní práci.</p>
	<Logo slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>

<TextSection>
	<h1 class="font-bold text-4xl mb-4">Ilustrace</h1>
	<p class="max-w-lg">
		Všechny ilustrace na této stránce, kromě loga, jsou pod licencí CC BY-NC 4.0, více informace
		najdete po kliknutí na odkaz níže.
	</p>
	<Paper slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>

<TextSection>
	<h1 class="font-bold text-4xl mb-4">Fonty</h1>
	<p class="max-w-lg mb-2">
		Hlavní font používaný na stránce je Inter, který je pod licencí Open Font License (více
		informací níže), pomocí tohoto fontu byly vytvořeny následující fonty: Mobilová Šifra, O Jedno
		Písmeno, Pozpátku, ty jsou také pod licencí Open Font License.
	</p>
	<p class="max-w-lg">Další fonty: Anglická Vlajka, Malý Kříž, Velký Kříž, jsou pod licencí MIT.</p>
	<Abc slot="image" styling="flex-1 basis-full h-60 mx-auto mb-8 md:mb-0" />
</TextSection>

<Item href="https://creativecommons.org/licenses/by-nc/4.0/deed.cs">CC BY-NC 4.0</Item>
<Item href="https://scripts.sil.org/OFL_web">Open Font License</Item>
<Item href="/pravni-informace/mit">MIT</Item>
