<script lang="ts" setup>
import { ref } from 'vue';

const scroll = ref<HTMLDivElement>();

let isAppearing = false;

addEventListener("scroll", () => {
	if (!isAppearing && scrollY > 110) {
		animateAppearScroll("in");
		isAppearing = true;
	}
	if (isAppearing && scrollY < 110) {
		animateAppearScroll("out");
		isAppearing = false;
	}
});

function swapFirstTwoArrayMembers(arr: any[]): any[] {
	const a = [...arr];
	const temp = a[1];
	a[1] = a[0];
	a[0] = temp; // a[1];
	return a;
}

function animateAppearScroll(inOrOut: "in" | "out") {
	const cl = scroll.value!.classList;

	if (inOrOut === 'in') {
		cl.remove("hidden");
	}

	const kf = [
		{
			translate: "0 10px",
			opacity: 0
		},
		{
			translate: "0",
			opacity: 1
		}
	];

	scroll.value!.animate(
		inOrOut === 'in' ? kf : swapFirstTwoArrayMembers(kf),
		{
			easing: "ease-in-out",
			duration: 150,
			fill: "forwards"
		}
	).onfinish = () => {
		if (inOrOut === 'out') {
			cl.add("hidden");
		}
	}
}

function scrollToTop() {
	window.scroll({
		top: 0,
		behavior: "smooth"
	});
}
</script>

<template>
	<div
		class="stt hidden bg-[#ffffffa0] p-2 rounded-full translate-y-[10px] opacity-0 transition-[transform] duration-100 hover:scale-110 hover:cursor-pointer"
		ref="scroll"
		@click="scrollToTop"
	>
		<v-icon
			name="co-vertical-align-top"
			scale="2"
		></v-icon>
	</div>
</template>

<style lang="scss" scoped>
.stt {
	position: fixed;
	right: 1.2rem;
	bottom: 5%;
}
.ov-icon {
	color: #000000aa;
}
</style>
