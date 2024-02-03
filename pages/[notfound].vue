<script lang="ts" setup>
useHead({
	title: "Not Found"
});
</script>

<template>
	<div class="grid justify-center justify-items-center">
		<v-icon name="fa-frown" scale="14" />
		<div class="text-center text-xl">Sorry, the page you're looking for doesn't exist.</div>
		<a href="/" class="transition-[filter] duration-100 hover:brightness-[75%] text-blue-300 font-medium my-3">Back to home</a>
	</div>
</template>
