<script lang="ts" setup>
import type { Social } from "@/types";

defineProps<Social>();

function openLink(link: string) {
	open(link);
}
</script>

<template>
	<div
		@click="openLink(href)"
		class="border-2 border-white border-solid rounded-3xl py-2 px-3 flex items-center gap-2 hover:cursor-pointer transition-[transform] duration-150 hover:scale-[1.02]"
	>
		<v-icon :name="icon" scale="2" />
		<span class="font-semibold">{{ name }}</span>
	</div>
</template>
