<script lang="ts" setup>
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

function animateAppearScroll(inOrOut: "in" | "out") {
	const cl = scroll.value!.classList;

	if (inOrOut === 'in') {
		cl.remove("hidden");
	}

	scroll.value!.animate(
		// sa susunod q na lng gawan ng shortcut katamad e
		inOrOut === 'in' ? [
			{
				translate: "0 10px",
				opacity: 0
			},
			{
				translate: "0",
				opacity: 1
			}
		] : [
			{
				translate: "0",
				opacity: 1
			},
			{
				translate: "0 10px",
				opacity: 0
			}
		],
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
		class="stt hidden border-white border-2 p-2 rounded-full border-solid translate-y-[10px] opacity-0 transition-[transform] duration-100 hover:scale-110 hover:cursor-pointer"
		ref="scroll"
		@click="scrollToTop"
	>
		<v-icon
			name="co-vertical-align-top"
			scale="2"
			inverse
			fill="#00ff00"
		></v-icon>
	</div>
</template>

<style lang="scss" scoped>
.stt {
	position: fixed;
	right: 1.2rem;
	bottom: 5%;
}
</style>
