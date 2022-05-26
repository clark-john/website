<template>
	<Wrapper class="flex flex-col gap-5 mt-7 mb-10 mobile:mx-6">
		<div class="text-5xl">Welcome to my <span class="font-bold">GitHub Page</span>:)</div>
    <div class="text-xl">
      Hi there, I'm <b>Clark</b>. A <span class="link-onload relative">coder</span> in this <b>GitHub</b> platform. I usually do coding for fun.
    </div>
    <Skills />
    <Projects />
    <div class="flex items-center flex-col gap-5">
    	<div class="text-xl text-black dark:text-white">You can email me by clicking this button:</div>
    	<button @click="sendEmail" class="bg-cyan-800 rounded-2xl active:translate-y-1 transition-[filter] duration-400 hover:brightness-75 py-3 px-6">
    		<i class="fas fa-paper-plane" ></i> Send Email
    	</button>
    </div>
  </Wrapper>
  <Footer />
</template>

<script>
import myAge from './data'

export default {
	setup(){
		return {
			myAge
		}
	},
	methods: {
		sendEmail(){
			document.location.href = "mailto:daprogrammer1@gmail.com"
		}
	}
}
</script>