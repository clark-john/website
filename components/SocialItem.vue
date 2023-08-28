<script lang="ts" setup>
import { Social } from "types";

defineProps<Social>();

function openLink(link: string) {
  window.open(link);
}
</script>

<template>
  <div
    class="font-inter dark:bg-teal-900 text-sm flex gap-2 items-center py-[6px] px-3 rounded-xl hover:brightness-75 hover:cursor-pointer bg-[#AAF8F4] social-item"
    @click="openLink(href)"
  >
    <span class="font-semibold">{{ name }}</span>
    <v-icon :name="icon" />
  </div>
</template>
