<template>
  <div class="cand lg:mt-[100px] flex text-center flex-col items-center justify-center">
    <div class="screen py-14 animate__animated animate__bounceInRight">
      <h3 class="text-primary text-xl mb-4 font-bold">
        Ancile for Candidates
      </h3>
      <h2 class="text-3xl text-[#1E1E1E] mb-1 font-bold">Find Your Life's Work</h2>
      <div class="py-6">
  <a href="#" class="bg-primary text-white transition duration-300 hover:bg-[#122f58] py-4 px-8">Get Started</a>
</div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.cand {
  background-image: url(../assets/candidate_bg.png);
  height: 70vh;
  max-width: none;
  background-position: center;
  background-size: cover;
}

@media (min-width: 1024px) {
  .lg\:mt-28 {
    margin-top: 6.5rem /* 112px */;
  }
}
</style>
