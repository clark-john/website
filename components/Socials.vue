<script lang="ts" setup>
import type { Social } from "@/types";

const socmeds: Social[] = [
	{
		name: "Facebook",
		icon: "fa-facebook",
		href: "https://www.facebook.com/jclarkies"
	},
	{
		name: "Instagram",
		icon: "fa-instagram",
		href: "https://www.instagram.com/jclarkie_"
	},
	{
		name: "Twitter",
		icon: "fa-twitter",
		href: "https://twitter.com/jclarkies_"
	},
	{
		name: "GitHub",
		icon: "fa-github",
		href: "https://github.com/clark-john"
	},
	{
		name: "TikTok",
		icon: "fa-tiktok",
		href: "https://www.instagram.com/jclarkie_"
	}
];
</script>

<template>
	<div class="py-10">
		<div class="text-center text-5xl font-bold">Socials</div>
		<div class="grid sm:grid-cols-2 mx-8 my-10 gap-4">
			<SocialItem
				v-for="{ href, name, icon } in socmeds"
				:name="name"
				:href="href"
				:icon="icon"
			/>
		</div>
	</div>
</template>
