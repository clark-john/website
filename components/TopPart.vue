<script lang="ts" setup>
const text = ref("Dark");
const html = document.documentElement;
const classList = html.classList;

function switchMode() {
	if (!classList.contains("dark")) {
		classList.add("dark");
		text.value = "Light";
		localStorage.setItem("theme", "dark");
	} else {
		classList.remove("dark");
		text.value = "Dark";
		localStorage.setItem("theme", "light");
	}
}
</script>

<template>
	<div class="flex justify-between items-center">
		<div class="font-monospace text-5xl">Clark</div>
		<button
			class="h-[50px] w-[50px] bg-black dark:bg-white rounded-full shadow-black dark:shadow-white shadow-md hover:cursor-pointer dot"
			@click="switchMode"
		>
			<span
				class="text-[14px] text-white dark:text-black text transition-color duration-200 font-bold xs:invisible md:visible"
			>
				{{ text }}
			</span>
		</button>
	</div>
</template>

<style lang="scss" scoped>
.dot {
	&:hover {
		.text {
			opacity: 100%;
		}
	}
}
.text {
	opacity: 0;
	transition: opacity 200ms ease-in-out;
	text-shadow: 0 0 7px white;
	.dark\:text-black {
		text-shadow: 0 0 7px black;
	}
}

.dot,
.text {
	&::selection {
		background-color: transparent;
	}
}
</style>
