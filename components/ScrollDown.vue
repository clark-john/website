<script lang="ts" setup>
const m = ref<HTMLDivElement>();

let isFading = false;

function animateFade(inOrOut: "in" | "out") {
	const v = m.value!;
	const isOut = inOrOut === "out";

	if (!isOut) {
		v.style.display = "";
	}

	v.animate(
		{
			opacity: isOut ? [1, 0] : [0, 1]
		},
		{ duration: 150, easing: "ease-in-out", fill: "forwards" }
	).onfinish = () => {
		if (isOut) {
			v.style.display = "none";
		}
	};
}

addEventListener("scroll", () => {
	if (!isFading && scrollY > 66) {
		animateFade("out");
		isFading = true;
	}
	if (isFading && scrollY < 66) {
		animateFade("in");
		isFading = false;
	}
});

function scrollDown() {
	document.location.href = "#socials";
}
</script>

<template>
	<div
		class="main grid justify-items-center text-center hover:cursor-pointer scroll-down"
		ref="m"
		@click="scrollDown"
	>
		Scroll down for my socials and such
		<v-icon name="pr-chevron-down" scale="4" class="-translate-y-2"></v-icon>
	</div>
</template>

<style lang="scss" scoped>
.main {
	position: absolute;
	bottom: 2%;
	left: 50%;
	translate: -50% 0;
}
</style>
