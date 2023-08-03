<script lang="ts" setup>
import { OhVueIcon } from 'oh-vue-icons';
import { setupIcons } from './setup/icons';

const app = useNuxtApp();

setupIcons();
app.vueApp.component('v-icon', OhVueIcon);

useSeoMeta({
	ogTitle: "John Clark",
	ogDescription: "My website",
	ogLocale: "en-PH"
});

const html = document.documentElement;
const body = document.body;
const cl = html.classList;

onMounted(() => {
	const isUserDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const theme = localStorage.getItem("theme");
	if (theme === 'dark' && isUserDark) {
		cl.add("dark");
	}
	html.style.opacity = '1';
	setTimeout(() => {
		body.classList.add('transition');
	}, 20);
});

const isDev = process.env.NODE_ENV === 'development';

</script>
<template>
	<div class="xs:mx-8 lg:mx-[27vw] h-[inherit]">
		<Head>
			<Title>Clark</Title>
			<Link rel="icon" href="/icons/favicon.png" type="image/png" />
			<Link rel="manifest" href="manifest.json" />
			<Meta charset="utf-8" />
		</Head>
		<div class="wrapper dark:text-white h-[inherit]">
			<NuxtPage />
			<DateTime class="datetime" />
		</div>
	</div>
</template>
