<script setup>

</script>

<template>
  <main class="hero flex flex-col justify-center mt-16">
    <div class="text-white items-center text-center py-7">
      <h3 class="font-bold animate__animated animate__flipInX head_text">Borderless Trade</h3>
      <p class="animate__animated animate__fadeInDown hero_text" style="animation-delay: 500ms;">Ancile works with clients across industries and ranging in size <br> from Fortune 500 to mid-cap growth and PE
        backed <br> companies. Across all of our client work, </p>
    </div>
  </main>
</template>

<style>
.hero {
  background:
    linear-gradient(to bottom, #00235380, #00235380),
    url('../assets/hero.png');
  background-size: cover;
  height: 70vh;
  background-position: center;
}

.head_text {
  font-size: 64px;
}

@media (max-width: 480px) {
  .head_text {
    font-size: 58px;
  }

  .hero_text {
    font-size: 90%;
    width: 80%;
    margin: 0 auto;
    /* line-height: 1.5; */
  }
}
</style>
