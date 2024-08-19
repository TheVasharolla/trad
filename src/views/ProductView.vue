<template>
  <div class="lg:mt-24">
    <ProductHeroSection />

    <div class="screen py-24">
      <div class="product1 mb-10 flex lg:py-10 flex-col">
        <div class="product-head flex text-center mb-6 justify-center items-center flex-1">
          <h2 class="font-bold text-4xl flex">About Producktive</h2>
        </div>
        <div class="product-desc py-5 flex flex-row justify-center items-center">
          <div class="relative pl-10 overflow-y-hidden flex-1">
            <img src="../assets/product_bg.png" alt="" class="pl-9 animate__animated animate__fadeInBottomLeft">
            <img src="../assets/product1.png" alt=""
              class="absolute top-8 animate__animated animate__fadeInDown  -left-5" style="animation-delay: 500ms;">
          </div>
          <div class="product-desc_text flex-1 py-6">
            <p class="mb-6 ktive transition duration-300">Producktive is a subscription based SAAS enterprise software aimed
              at improving productivity medium to large organisations. Most medium to large organisations has employees
              ranging from 500 - 25000 employees. It is of enormous importance that when organisations have teams of
              this size, and scale, they strive to make employees productive. Productivity can be improved my employing
              a multi front strategy. Improving morales of the employees, providing a sense of purpose, allowing the
              company’s mission statement to percolate to the lowest rungs of the employees, team building exercises,
              bringing in guest speakers, face time with upper management etc and few methods we could employ to improve
              productivity.</p>
            <div class="btn py-4">
              <a href="#"
                class="bg-primary sumit text-white px-7 py-3 text-sm transition duration-300 hover:bg-blue-700 font-bold hover:-translate-x-3 flex-shrink-0">Goto
                Product</a>
            </div>
          </div>
        </div>
      </div>
      <div class="product2 flex py-5 flex-col">
        <div class="product-head flex mb-6 text-center justify-center items-center flex-1">
          <h2 class="font-bold text-4xl flex">Ocreal About</h2>
        </div>
        <div class="product-desc py-5 flex flex-row justify-center items-center">
          <div class="product-desc_text flex-1 py-6">
            <p class="mb-6 transition duration-300">The company would like to build the platform & work with a freemium model. The most basic services will be offered free of charge, but the user will be charged for upgrades or concierge services.
            </p>
            <!-- <br> -->
            <p class="mb-6 transition duration-300">
              The underlying technical model will a platform with different customer personas, each of which will get their own registration & home pages. Parts of the platform that require hevy computing like the AI models will be hosted on a cloud platform.
            </p>
            <!-- <br> -->
            <p class="mb-6 transition duration-300">
              We plan to leverage the Amazon web services public cloud platform. Users can access this platform, and their content via the Internet by connecting to our website. OCREAL, provides many benefits:
            </p>
            <div class="btn py-4">
              <a href="#"
                class="bg-primary sumit text-white px-7 py-3 text-sm transition duration-300 hover:bg-blue-700 font-bold hover:-translate-x-3 flex-shrink-0">Goto
                Product</a>
            </div>
          </div>
          <div class="relative justify-end py-5 lg:ml-[20%] flex-1">
            <img src="../assets/product_bg.png" alt="" class="pl-14" v-motion-pop-visible-once>
            <img src="../assets/product2.png" alt=""
              class="absolute top-20 -left-5" style="animation-delay: 500ms;" v-motion-slide-visible-once-left >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductHeroSection from '@/components/ProductHeroSection.vue';


</script>

<style scoped>
.sumit:hover {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
}

@media (max-width: 480px) {
  .product-desc {
    flex-direction: column;
  }

  .ktive {
    text-align:center;
  }

  .btn {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
