<template>
  <footer class="bg-primary text-white">
    <div class="screen py-5">
      <div class="flex flex-col">
        <div class="footer_header">
          <h3
            class="text-3xl my-14 text-white font-bold">At Ancile Our Real Business Is You.</h3>
        </div>
        <div class="footer_main mb-8 justify-between flex flex-row">
          <div class="footer_main-logo flex flex-col space-y-10">
            <div v-for="logo in logos" :key="logo.id" class="flex-row flex">
              <img :src="logo.image" class="pr-5">
              <div class="flex flex-col justify-center">
                <h3 class="text-xl">{{ logo.head }}</h3>
                <p class="text-xs">{{ logo.sub }}</p>
              </div>
            </div>
          </div>
          <div class="footer_main-text flex flex-row space-x-40 justify-center">
            <div class="footer_main-company flex flex-col">
              <h3 class="text-xl font-bold mb-4">Company</h3>
              <div class="flex flex-col space-y-3">
                <a href="#" class="text-white hover:font-medium transition duration-150">About</a>
                <a href="#" class="text-white hover:font-medium transition duration-150">Industries</a>
                <a href="#" class="text-white hover:font-medium transition duration-150">Products</a>
                <a href="#" class="text-white hover:font-medium transition duration-150">Careers</a>
              </div>
            </div>
            <div class="footer_main-services flex flex-col">
              <h3 class="text-xl font-bold mb-4">Services</h3>
              <div class="flex flex-col space-y-3">
                <a href="#" class="text-white hover:font-medium transition duration-150">Consulting</a>
                <a href="#" class="text-white hover:font-medium transition duration-150">Retained Search</a>
                <a href="#" class="text-white hover:font-medium transition duration-150">Contingency Search</a>
                <a href="#" class="text-white hover:font-medium transition duration-150">Managed Services</a>
              </div>
            </div>
            <div class="footer_main-careers flex flex-col">
              <h3 class="text-xl font-bold mb-4">Contact</h3>
              <div class="flex flex-col space-y-3">
                <p class="text-white">
                  Corporate Headquarters <br>
                  329 odyssey lane <br>
                  Milipitas, CA-95035
                </p>
                <p class="text-white text-xl">+1 (919) 607-2143</p>
                <p class="text-white">hr@ancileinc.com</p>
              </div>
            </div>
          </div>
        </div>
        <hr class="py-4">
        <FooterMain />
      </div>
    </div>
  </footer>
</template>
<script setup>
import FooterMain from '@/components/FooTer.vue'
import footer1 from '@/assets/footer_one.png'
import footer2 from '@/assets/footer_two.png'
import footer3 from '@/assets/footer_three.png'
import { ref } from "vue";

const logos = ref([
  {
    id: 1,
    image: footer1,
    head: 'For Clients',
    sub: 'Free yourself to focus'
  },
  {
    id: 2,
    image: footer2,
    head: 'For Consultants',
    sub: 'Project ninjas rejoice'
  },
  {
    id: 3,
    image: footer3,
    head: 'For Candidates',
    sub: 'The ideal job is here'
  },
])
</script>

<style scoped>
@media (max-width: 480px) {
  .footer_main{
    display: none; /* or a specific value, e.g., 360px */
  }

  .footer_header h3 {
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
  }

  hr{
    /* display: none; or a specific value, e.g., 360px */
  }

}
</style>
