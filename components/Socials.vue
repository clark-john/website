<script lang="ts" setup>
import { Social } from "types";

const socials: Social[] = [
	{
		name: "Facebook",
		icon: "fa-facebook",
		href: "https://www.facebook.com/jclarkies"
	},
	{
		name: "Instagram",
		icon: "fa-instagram",
		href: "https://instagram.com/cl4rk_john"
	},
	{
		name: "Twitter",
		icon: "fa-twitter",
		href: "https://twitter.com/ClarkDoesTech"
	},
	{
		name: "GitHub",
		icon: "fa-github",
		href: "https://github.com/clark-john"
	},
	{
		name: "TikTok",
		icon: "fa-tiktok",
		href: "https://tiktok.com/@httpistyep"
	}
];
</script>

<template>
	<div class="my-16">
		<div class="section-header">Links:</div>
		<div class="grid-cols-2 grid gap-2">
			<SocialItem
				v-for="{ href, name, icon } in socials"
				:href="href"
				:icon="icon"
				:name="name"
				:key="name.toLowerCase()"
			/>
		</div>
	</div>
</template>
