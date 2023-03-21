<script lang="ts">
	let page: any;
	let body: HTMLElement | null = null;
	let darkTheme = false;
	let nav = false;

	import { page as _page } from '$app/stores';
	import { onMount } from 'svelte';
	import Delete from '../components/ilustrations/Delete.svelte';
	import Logo from '../components/ilustrations/Logo.svelte';
	import Menu from '../components/ilustrations/Menu.svelte';
	import Link from '../components/nav/Link.svelte';
	_page.subscribe((x) => (page = x.url.pathname));

	onMount(() => {
		body = document.getElementById('body');
		const savedTheme = localStorage.getItem('darkTheme');
		if (savedTheme) {
			darkTheme = savedTheme === 'true' ? true : false;
		} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			darkTheme = true;
		}
	});

	const switchTheme = () => {
		darkTheme = !darkTheme;
		localStorage.setItem('darkTheme', darkTheme ? 'true' : 'false');
		if (body) {
			// @ts-ignore
			body.classList.toggle('dark');
		}
	};
</script>

<nav
	class="flex fixed z-40 top-0 items-center w-full bg-white dark:bg-slate-800 border-b border-stone-400 dark:border-stone-600 2xl:px-40 px-5 py-3"
>
	<Logo styling="mr-10" />
	<div
		class={`${
			nav ? 'flex' : 'hidden md:flex'
		} flex-col md:flex-row items-start md:items-center py-1 md:py-0 flex-1 absolute md:static top-full left-0 w-full bg-white dark:bg-slate-800 border-b md:border-0 border-stone-400 dark:border-stone-600`}
	>
		<Link on:click={() => (nav = false)} active={page === '/'} href="/">Domů</Link>
		<Link on:click={() => (nav = false)} active={new RegExp('^/uzly').test(page)} href="/uzly"
			>Uzly</Link
		>
		<Link on:click={() => (nav = false)} active={new RegExp('^/sifry').test(page)} href="/sifry"
			>Šifry</Link
		>
		<a
			href="/aplikace"
			on:click={() => (nav = false)}
			class="block ml-4 md:ml-auto w-fit px-4 py-2 my-2 md:my-0 bg-green-500 text-white text-sm rounded-md"
			>Aplikace</a
		>
	</div>
	{#if nav}
		<Delete styling="ml-auto md:hidden" on:click={() => (nav = false)} />
	{:else}
		<Menu styling="ml-auto md:hidden" on:click={() => (nav = true)} />
	{/if}
</nav>

<main class="2xl:px-40 px-10 min-h-screen text-black dark:text-white bg-white dark:bg-slate-800">
	<slot />
</main>

<footer class="pt-20 h-fit w-full bg-white dark:bg-slate-800">
	<div
		class="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full border-t border-stone-400 dark:border-stone-600 2xl:px-40 px-10 py-6"
	>
		<h1 class="mb-5 lg:mb-0 text-black dark:text-white cursor-pointer" on:click={switchTheme}>
			Přepnout na {darkTheme ? 'světlý' : 'tmavý'} vzhled
		</h1>
		<div class="mb-5 lg:mb-0 flex flex-col lg:flex-row text-black dark:text-white">
			<a href="https://forms.gle/6ABp7xqLZmp2Qtke8" target="_blank" class="mb-1 lg:mb-0 lg:mx-8"
				>Nahlásit chybu</a
			>
			<a href="/ke-stazeni" class="mb-1 lg:mb-0 lg:mx-8">Ke stažení</a>
			<a href="/pravni-informace" class="mb-1 lg:mb-0 lg:mx-8">Právní informace</a>
		</div>
		<p class="text-stone-700 dark:text-stone-300 lg:text-right">Vytvořil Michal Tkáč</p>
	</div>
</footer>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap');

	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@font-face {
		font-family: Mobilova_Sifra;
		src: url('/fonts/Mobilova-Sifra.ttf');
	}

	@font-face {
		font-family: Maly_Kriz;
		src: url('/fonts/Maly-Kriz.ttf');
	}

	@font-face {
		font-family: Velky_Kriz;
		src: url('/fonts/Velky-Kriz.ttf');
	}

	@font-face {
		font-family: Pozpatku;
		src: url('/fonts/Pozpatku.ttf');
	}

	@font-face {
		font-family: O_Jedno_Pismeno;
		src: url('/fonts/O-Jedno-Pismeno.ttf');
	}

	@font-face {
		font-family: Anglicka_Vlajka;
		src: url('/fonts/Anglicka-Vlajka.ttf');
	}
</style>
