<template>
  <div class="flex flex-row card justify-between py-14">
    <div class="flex flex-col card_inner bg-primary transition duration-200 hover:drop-shadow-2xl hover:-translate-x-5 hover:-translate-y-5" v-for="card in cards" :key="card.id"  v-motion-pop-visible-once>
      <img :src="card.image" :alt="card.heading">
      <h2 class="font-bold head text-2xl p-6 mb-7 text-white" v-html="card.heading"></h2>
      <hr class="mx-7">
      <div class="card-foot flex overflow-y-hidden justify-between">
        <div class="py-4">
          <h3 class="text-7xl ml-7 py-4 font-bold text-white">05</h3>
          <p class="text-white ml-7 -mt-6 pb-4">Jan</p>
        </div>
        <div class="pr-8 py-4 arr">
          <ArrowIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import insight1 from '@/assets/insight_one.png';
import insight2 from '@/assets/insight_two.png';
import insight3 from '@/assets/insight_three.png';
import insight4 from '@/assets/insight_four.png';
import { ref } from "vue";
import ArrowIcon from './ArrowIcon.vue';

const cards = ref([
  {
    id: 1,
    image: insight1,
    heading: 'Winning at the<br>Speed of Change'
  },
  {
    id: 2,
    image: insight2,
    heading: 'Improving Internal<br>Banking Applications'
  },
  {
    id: 3,
    image: insight3,
    heading: 'Supply Chain<br>Strategy - CPFR'
  },
  {
    id: 4,
    image: insight4,
    heading: 'Cybersecurity<br>Success Stories'
  },
])
</script>

<style scoped>
.arr {
  margin-top: 23%;
}

@media (max-width: 480px) {
  .card {
    flex-direction: column;
  }

  .card_inner {
    margin-bottom: 30px;
  }

  .head {
    margin-bottom: 5px;
  }
}
</style>
