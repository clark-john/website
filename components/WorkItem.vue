<script lang="ts" setup>
import type { Work } from "../types"; 

defineProps<Work>();
</script>

<template>
	<div class="bg-blue-800 w-1/4 rounded-xl p-4">
		<div class="text-xl">{{ name }}</div>
		{{ link }}
		{{ tools }}
	</div>
</template>
