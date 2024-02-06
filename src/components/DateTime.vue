<script lang="ts" setup>
import { ref, onUnmounted } from 'vue';

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

function toDoubleZeroes(num: number) {
	return num < 10 ? "0" + num : num.toString();
}

function toReadable(date: Date) {
	const month = months[date.getMonth()];
	const day = date.getDate();
	const year = date.getFullYear();
	const hour = date.getHours();
	const minute = toDoubleZeroes(date.getMinutes());
	const second = toDoubleZeroes(date.getSeconds());
	const isAm = hour < 12;
	return `
    ${month} ${day}, ${year} 
    ${isAm ? hour : hour - 12}:${minute}:${second} ${isAm ? "AM" : "PM"}
  `.trim();
}

const date = ref(new Date());

const int = setInterval(() => {
	date.value = new Date();
}, 1000);

onUnmounted(() => {
	clearInterval(int);
});
</script>

<template>
	<div class="text-center pb-8">
		{{ toReadable(date) }}
	</div>
</template>
