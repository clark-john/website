<template>
	<div class="flex items-center gap-3 py-3 
		bg-teal-100 rounded-2xl px-3 justify-center 
		hover:scale-105 transition-transform duration-200 
		border-2 border-teal-500 dark:mobile:bg-[#032d5e] 
		dark:bg-[#03264f] dark:border-[#010C19]">
		<img 
			:src="img" 
			:class="skill == 'Flask' ? 'dark:invert' : '' "
		/> 
		<span class="text-md">{{ skill }}</span>
	</div> 
</template>

<script>
export default {
	props: {
		skill: String,
		img: String,
	}
}
</script>
<style>
img {
	width: 40px;
}
</style>