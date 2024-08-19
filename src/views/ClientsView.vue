<template>
  <div>
    <HeroSection />

    <div class="firm">
      <div class="flex flex-row py-14 firm-cs screen">
        <div class="firm_right relative animate__slow">
          <img src="../assets/firm_img.png" class="absolute animate__animated oscillate animate__fadeInLeft z-10" style="animation-delay: 1s;" alt="">
          <img src="../assets/firm_bg.png" class="relative animate__animated animate__fadeInLeft z-0 ml-6 mt-7 firm_bg" style="animation-delay: 500ms;" alt="">
        </div>
        <div class="firm_left ml-24 flex flex-col justify-center space-y-7 animate__fadeInRight animate__slow"
          style="animation-delay: 500ms;">
          <h3 class="font-bold text-5xl">We've got you <br>firmly</h3>
          <p class="text-sm">Babe Ruth said something along the lines of “The way a team plays as a <br> whole
            determines it’s success. You may have the greatest bunch of <br> individual stars in the world, but if they
            don’t play together, the club won’t <br> be worth a dime”.</p>
          <p class="text-sm">We measure our success by how well we’ve helped you create a winning <br> team. That means
            matching you with players that have not only the skills <br> you are looking for - one that can lead your
            critical consulting project, or <br> fill the gap in your leadership team, but that have the heart as well.
          </p>
        </div>
      </div>
    </div>

    <hr class="screen dashed">
    <ClientsSlider />

    <div class="screen bg-primary test flex flex-row">
      <div class="flex flex-col test-inner  justify-between text-white flex-1 p-20 italic flex-grow" v-motion-slide-visible-once-bottom>
        <p class="max-w-md main lg:text-2xl">“The relationship gives us a company that we trust to reach out to on an as-need
          basis. Plus the positive relationship we have at Ancile have allowed us to work with a company we are
          comfortable with and that we trust will provide us result”</p>
        <p class="text-xs"><span class="font-bold">Vp of Accounting</span> Quick Service Restauruant</p>
      </div>
      <img src="../assets/clients_biz.png" class=" flex-1" alt="">
    </div>

    <div class="form screen cli py-24 px-40 flex flex-col">
      <h3 class="font-bold cli_inc text-2xl ml-3">Inquiry form</h3>
      <div class="justify-center">
        <ClientsForm style="width: 100%"/>
      </div>
    </div>

    <div class="insights screen">
      <div class="insights_container flex flex-col space-y-10 py-5">
        <div class="insights_text flex justify-center items-center space-y-4 flex-col">
          <h3 class="font-bold text-2xl text-center">Ancile Insights</h3>
        <p class="text-center flex max-w-5xl mb-6">Ancile works with clients across industries and ranging in size from Fortune 500 to mid-cap  growth and PE backed companies. Across all of our client work, we derive new insights and  implement new ways to help them drive revenue, gain efficiencies and keep costs low. Sharing  those insights and approaches helps us stay sharp.</p>
        </div>
        <div class="insights_card">
          <InsightCard />
        </div>
      </div>
    </div>

    <RegionSection />
  </div>
</template>

<script setup>
import ClientsForm from '@/components/ClientsForm.vue';
import HeroSection from '@/components/ClientsHeroSection.vue';
import ClientsSlider from '@/components/ClientsSlider.vue';
import InsightCard from '@/components/InsightCard.vue';
import RegionSection from '@/components/RegionSection.vue';

// import { onMounted } from 'vue'

// onMounted(() => {
//   window.scrollTo(0, 0)
// })

</script>

<style scoped>
hr {
  /* margin: 1.875em 0; */
  border: none;
  border-bottom: solid 1px #969292;
}

.dashed {
  border: none;
  height: 2px;
  background: #969292;
  background: repeating-linear-gradient(90deg, #969292, #969292 6px, transparent 6px, transparent 12px);
}

.oscillate {
  animation: oscillate 2s ease-in-out infinite;
}

@keyframes oscillate {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}

@media (max-width: 480px) {
  .firm-cs {
    padding-bottom: 2rem;
    /* padding-top: 3rem; */
  }

  .firm_right {
    width: 80%;
    display: none;
  }

  .firm_left {
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-left: 0;
    /* color: white; */
    /* width: 90%; */
  }

  .firm_left h3 {
    font-size: 220%;
  }

  .firm_left p {
    font-size: 80%;
  }

  .test img{
    display: none
  }

  .test-inner {
    padding: 2rem
  }

  .test-inner .main {
    font-size: 20px;
    margin-bottom: 30px;
  }

  .cli {
    padding-right: 1px;
    padding-left: 1px;
  }

  .cli_inc {
    text-align: center;
  }
}
</style>
