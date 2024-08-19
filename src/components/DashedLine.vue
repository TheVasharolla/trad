<template>
  <div class="h-2 w-80 bg-gray-300 flex justify-between">
    <div v-for="(dot, index) in dots" :key="index" :style="{ 'animation-delay': `${index * 0.2}s` }" class="w-3 h-2 bg-gray-300 animate-pulse"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const dots = ref(new Array(10).fill(0))
</script>
