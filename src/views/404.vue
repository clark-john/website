<template>
	<div class="flex flex-col items-center gap-3 mt-20">
		<img :src="sadEmoji" alt="" class="w-[14em] dark:invert">
		<div class="text-4xl font-medium">404 Page Not Found</div>
		<div class="text-xl">Sorry, we can't find the page that you're looking for.</div>
	</div>
</template>
<script>
import emojiFrownFill from '@/assets/emoji-frown-fill.svg'

export default {
	data(){
		return {
			sadEmoji: emojiFrownFill
		}
	}
}
</script>