<script lang="ts" setup>
import type { Social } from "@/types";

const contacts: Social[] = [
	{
		href: "mailto:mjohncl4rk@gmail.com",
		name: "Email",
		icon: "pr-envelope"
	},
	{
		href: "tel:09288901066",
		name: "SMS",
		icon: "pr-phone"
	},
	{
		href: 'https://t.me/jclarkies',
		name: "Telegram",
		icon: "fa-telegram"
	}
]
</script>
<template>
	<div class="pb-10">
		<div class="text-center text-5xl font-bold">Contact Me</div>
		<div class="grid sm:grid-cols-2 mx-8 my-10 gap-4">
			<SocialItem
				v-for="{ href, name, icon } in contacts"
				:name="name"
				:href="href"
				:icon="icon"
			/>
		</div>		
	</div>
</template>