<script lang="ts" setup>
const m = ref<HTMLDivElement>();

function modifyLeft() {
	const j = m.value;
	if (j) {
		j.style.left = ((innerWidth / 2) - (j.clientWidth / 2)) + "px";	
	}
}

let isFading = false;

function animateFade(inOrOut: 'in' | 'out'){
	m.value!.animate({
		opacity: inOrOut === 'out' ? [1, 0] : [0, 1]
	}, { duration: 150, easing: 'ease-in-out', fill: 'forwards' });
}

onscroll = () => {
	if (!isFading && scrollY > 66){
		animateFade('out');
		isFading = true;
	}
	if (isFading && scrollY < 66){
		animateFade('in');
		isFading = false;
	}
}

onMounted(modifyLeft);
onresize = modifyLeft;

function scrollDown(){
	document.location.href = '#haha'
}
</script>

<template>
	<div 
		class="main grid justify-items-center hover:cursor-pointer" 
		ref="m" 
		@click="scrollDown"
	>
		Scroll down for more
		<v-icon name="pr-chevron-down" scale="4" class=""></v-icon>
	</div>		
</template>

<style lang="scss" scoped>
.main {
	position: absolute;
	bottom: 2%;
}

// .v-fade-sd-enter-to, .v-fade-sd-leave-from {
	// opacity: 1;
// }

/*.v-enter-active,.v-leave-active {
	transition: opacity 100ms ease-in-out;
}

.v-leave-to, .v-enter-from {
	opacity: 0;
}*/

</style>