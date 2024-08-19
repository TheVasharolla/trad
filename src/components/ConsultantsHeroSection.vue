<template>
  <div>
    <div class="cons lg:mt-[100px]  text-center flex flex-col justify-center">
      <div class="screen animate__animated animate__backInDown py-14">
        <p class="text-[#A7D8FF] text-2xl pb-5 font-bold">Ancile for Consultants</p>
      <h3 class="text-white text-4xl font-bold pb-10">Amplify your impact and<br>your life!</h3>
      <a href="#" class="px-10 py-3 mt-4 transition duration-300 hover:translate-y-4 bg-primary text-white">Get Started</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup () {


    return {}
  }
}
</script>

<style scoped>
  .cons {
    background-image: url(../assets/consultant_hero-bg.png);
    background-position: center;
    background-size: cover;
    height: 70vh;
  }
</style>
