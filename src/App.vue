<script setup lang="ts">
import { onMounted } from 'vue';

function gradientBg(){
  document.body.style.backgroundColor = `hsl(${230 + (scrollY / 19)}deg 60 15)`
}

onMounted(gradientBg);
addEventListener("scroll", gradientBg);
</script>

<template>
  <div class="text-white h-[inherit] font-comfortaa">
    <div class="
      font-comfortaa text-3xl text-yellow 
      font-semibold py-5 px-20"
      id="navbar"
    >
      <a href="/">@httpistyep</a>
    </div>
    <router-view />
  </div>
</template>
