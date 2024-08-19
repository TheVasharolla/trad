<template>
  <div class="flex py-10 flex-wrap justify-between">
    <div data-animate="fadeIn" v-for="card in cards" :key="card.id"
      class="bg-[#F5F5F5] card flex flex-col mb-20 transition duration-300 hover:-translate-y-2 pb-4"
      v-motion-slide-visible-once-top>
      <img :src="card.image" :alt="card.heading">
      <h2 class="font-bold text-2xl p-4 pl-10 mb-7 mt-3" v-html="card.heading"></h2>
      <p class="p-4 pl-10 card_text" v-html="card.text"></p>
      <a :href="card.link"
        class="p-4 pl-10 mt-auto items-end hover:text-blue-950 transition duration-300 flex text-primary">Learn More</a>
    </div>
  </div>
</template>

<script setup>
import image1 from '@/assets/features_one.png';
import image2 from '@/assets/features_two.png';
import image3 from '@/assets/features_three.png';
import image4 from '@/assets/features_four.png';
import image5 from '@/assets/features_five.png';
import image6 from '@/assets/features_six.png';
import image7 from '@/assets/features_seven.png';
import image8 from '@/assets/features_eight.png';
import image9 from '@/assets/features_nine.png';
import { ref } from "vue";

const cards = ref([
  {
    id: 1,
    image: image1,
    heading: 'Health Care and<br>Life Sciences',
    text: "Ancile's Healthcare division provides<br>customized and flexible solutions<br>to help you reduce the cost and delivery<br>time of your operations.",
    link: 'https://example.com/card1'
  },
  {
    id: 1,
    image: image2,
    heading: 'Retail and Consumer',
    text: 'Ancile Supply Chain Solutions enables<br>retailers and consumer packaged<br>goods companies to plan and execute<br>their supply chain planning initiatives<br>with an intelligent and customized<br>approach.',
    link: 'https://example.com/card1'
  },
  {
    id: 3,
    image: image3,
    heading: 'Manufacturing',
    text: 'Ancile Supply Chain Solutions creates<br>supply chain value for consumer<br>goods manufacturers and retailers. We<br>understand the connection between<br>retailers and suppliers in business<br>processes and technologies, and we<br>know how to make those connections<br>effective.',
    link: 'https://example.com/card2'
  },
  {
    id: 4,
    image: image4,
    heading: 'Technology',
    text: 'Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit, sed do<br>eiusmod tempor incididunt ut labore<br>et dolore magna aliqua. Ut enim ad<br>minim veniam, quis nostrud<br>exercitation',
    link: 'https://example.com/card2'
  },
  {
    id: 5,
    image: image5,
    heading: 'Media and Entertainment',
    text: 'Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit, sed do<br>eiusmod tempor incididunt ut labore<br>et dolore magna aliqua. Ut enim ad<br>minim veniam, quis nostrud<br>exercitation',
    link: 'https://example.com/card2'
  },
  {
    id: 6,
    image: image6,
    heading: 'Financial Services',
    text: 'Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit, sed do<br>eiusmod tempor incididunt ut labore<br>et dolore magna aliqua. Ut enim ad<br>minim veniam, quis nostrud<br>exercitation',
    link: 'https://example.com/card2'
  },
  {
    id: 7,
    image: image7,
    heading: 'Public Sector',
    text: 'Ancile’s specialized technology risk<br>and compliance solutions team,<br>Ancile Risk Solutions, works with <br>public sector entities of all types<br>across federal, state and local levels<br>from departments of motor vehicles,<br>educational institutions.',
    link: 'https://example.com/card2'
  },
  {
    id: 8,
    image: image8,
    heading: 'Energy and Utilities',
    text: 'Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit, sed do<br>eiusmod tempor incididunt ut labore<br>et dolore magna aliqua. Ut enim ad<br>minim veniam, quis nostrud<br>exercitation',
    link: 'https://example.com/card2'
  },
  {
    id: 9,
    image: image9,
    heading: 'Transportation and<br>Logistics',
    text: 'Ancile provides project and<br>permanent placement talent for<br>Distribution, Logistics, Supply Chain<br>and Transportation sectors.',
    link: 'https://example.com/card2'
  },
  // ...
])
</script>

<style scoped>
@media (max-width: 480px) {
  .card_text {
    font-size: 90%;
  }
}

.card:hover {
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2)
}
</style>
