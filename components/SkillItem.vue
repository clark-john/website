<script lang="ts" setup>
import { Skill } from "types";

defineProps<Skill>();
</script>

<template>
  <div class="grid justify-items-center">
    <v-icon :name="icon" :scale="3.5" />
    <span class="text-lg">{{ name }}</span>
  </div>
</template>
