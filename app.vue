<script lang="ts" setup>
import { OhVueIcon } from 'oh-vue-icons';
import { setupIcons } from './utils';

const app = useNuxtApp();
const router = useRouter();
const route = useRoute();

const navbar = ref();

setupIcons();
app.vueApp.component('v-icon', OhVueIcon);

useSeoMeta({
	ogTitle: "John Clark",
	ogDescription: "My website",
	ogLocale: "en-PH"
});

function gradientBg(){
	document.body.style.backgroundColor = `hsl(${230 + (scrollY / 20)}deg 60 15)`
}

onMounted(() => {
	if (route.path === '/'){		
		const m = document.querySelector(".main-content") as HTMLDivElement;
		m.style.height = (window.innerHeight - navbar.value.clientHeight) + "px";
	}
	gradientBg();
});
addEventListener("scroll", gradientBg);

</script>
<template>
	<Head>
		<Title>Clark</Title>
		<Link rel="icon" href="/icons/favicon.png" type="image/png" />
		<Link rel="manifest" href="manifest.json" />
		<Meta charset="utf-8" />
	</Head>
	<div class="wrapper text-white h-[inherit] font-comfortaa">
		<div class="
			font-comfortaa text-3xl text-yellow 
			font-semibold py-5 px-20"
			ref="navbar"
		>
			<span class="hover:cursor-pointer" @click="router.push('/')">
				@httpistyep
			</span>
		</div>
		<NuxtPage />
		<!-- <DateTime class="datetime" /> -->
	</div>
</template>
