<template>
	<div class="main h-[inherit]">	
		<MainContent />
		<ScrollDown />
		<ScrollToTop />
		<Socials id="socials" />
		<ContactMe id="contact" />
		<DateTime />
	</div>
</template>

<style lang="scss" scoped>
@keyframes fade {
	from { opacity: 0; }
	to { opacity: 1; }
}

.main {
	animation: fade 150ms ease-in-out;
	animation-fill-mode: forwards;
}
</style>
