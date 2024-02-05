<script lang="ts" setup>
const r = ref<HTMLDivElement>();
const route = useRoute();

onMounted(() => {
	const s = r.value!;
	if (route.path === '/'){
		const navbar = document.getElementById("navbar") as HTMLDivElement;
		s.style.height = `calc(100% - ${navbar.clientHeight}px)`;
	}
});
</script>

<template>
	<div class="text-center main-content" ref="r">
		<div class="md:text-9xl tracking-widest font-light pt-24 mb-8 xs:text-7xl">
			Hello
		</div>
		<div class="text-xl mx-4">
			My name is <span class="font-bold">John Clark Melencio</span>. Born in
			Manila, raised in Bulacan. I build things sometimes.
		</div>
	</div>
</template>
