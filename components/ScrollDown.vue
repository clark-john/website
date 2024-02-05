<script lang="ts" setup>
const m = ref<HTMLDivElement>();

function modifyLeft() {
	const j = m.value;
	if (j) {
		j.style.left = innerWidth / 2 - j.clientWidth / 2 + "px";
	}
}

let isFading = false;

function animateFade(inOrOut: "in" | "out") {
	const v = m.value!;
	const isOut = inOrOut === "out";

	if (!isOut) {
		v.style.display = "";
	}

	modifyLeft();

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

onMounted(modifyLeft);
addEventListener("resize", modifyLeft);

function scrollDown() {
	document.location.href = "#socials";
}
</script>

<template>
	<div
		class="main grid justify-items-center hover:cursor-pointer scroll-down"
		ref="m"
		@click="scrollDown"
	>
		Scroll down for my socials and such
		<v-icon name="pr-chevron-down" scale="4"></v-icon>
	</div>
</template>

<style lang="scss" scoped>
.main {
	position: absolute;
	bottom: 2%;
}
</style>
