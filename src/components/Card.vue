<template>
	<div class="flex flex-col gap-3 py-3 
		rounded-xl px-5  
		hover:scale-105 transition-transform duration-200 
		border-2 border-black dark:border-white w-[200px]">
		<div class="font-bold text-lg">
			<a :href="'https://github.com/clark-john/'+name" target="_blank">{{name}}</a>
		</div>	
		<slot></slot>
	</div> 
</template>

<script>
export default {
	props: {
		name: String
	}
}
</script>