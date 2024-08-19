<script setup>
import { onBeforeRouteUpdate } from 'vue-router';
import { RouterView } from 'vue-router'
import NavBarComponent from '@/components/Navbar.vue'
import FooterComponent from '@/components/FooterSection.vue'

onBeforeRouteUpdate(() => {
    window.scrollTo(0, 0);
  });
</script>

<template>
  <div>
    <NavBarComponent/>
    <div>
      <RouterView />
    </div>
    <FooterComponent />
  </div>
</template>

<style scoped></style>
