<template>
	<div>
		<button @click="count++" class="py-60 px-[15em] mobile:py-28 mobile:px-[6.5em] 
		rounded-full bg-cyan-800 active:translate-y-2 hover:brightness-90
		 transform-[brightness] duration-100 active:brightness-75">
			Click Me
			<div class="font-bold text-xl mt-2">{{count}}</div>
		</button>
	</div>
</template>

<script lang="ts">

export default {
	data(){
		return {
			count: 0
		}
	},
	beforeMount(){
		if (localStorage.length === 0) {
			localStorage.setItem("count", 0)
		}
		this.count = localStorage.getItem("count")
	},	
	mounted(){
		window.addEventListener('unload', () => {
			localStorage.setItem("count", this.count)
		})
	}	
}


</script>