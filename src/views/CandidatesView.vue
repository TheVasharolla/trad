<script setup>
import CandidatesHeroSection from '@/components/CandidatesHeroSection.vue';
import ClientsSlider from '@/components/ClientsSlider.vue';
import RegionSection from '@/components/RegionSection.vue';
// import { onMounted } from 'vue'

// onMounted(() => {
//   window.scrollTo(0, 0)
// })
</script>

<template>
  <div class="candidates">
    <div class="candidates-container">
      <CandidatesHeroSection />

      <div class="screen feat flex flex-row lg:py-20">
        <div class="left flex-1" v-motion-roll-visible-once-left>
          <img src="../assets/candidate_feat.png" class="" alt="">
        </div>
        <div class="right lg:pl-10 lg:py-10 lg:mt-14 flex-1">
          <h3 class="text-4xl flex w-2/3 font-bold">Trust us to market you better!</h3>
          <div class="py-10">
            <p>There’s no way your resume can fully sum you up. Humans aren’t meant to be filtered by keywords. (Save that for shopping online). That’s why we are here. At Ancile, we talk one on one with the hiring managers at the companies you want to work for. We talk about not just your experience, but who you are as a person.</p>
            <br>
            <p>Intriguing concept, right? Our Ancile team members are going to take the time to learn about the “you” behind the resume. Then we will take all of that due dilligence and talk with our client partners at some of the best companies out there - to help place you in a work environment that doesn’t make you wake up dreading the start of your day? Who wants that?</p>
            <br>
            <p>
              Whether you’re used to running a company from the corner office, or your’re just starting out, let us show you the difference Ancile can make at every stage of your career journey.
            </p>
          </div>
          <a href="#" class="px-5 font-semibold transition duration-300 hover:-translate-y-3 py-5 bg-primary text-white object-none">Apply for Jobs</a>
        </div>
      </div>

      <ClientsSlider />

      <div class="flex py-10 lg:justify-between flex-row screen">
        <div class="cand_svg flex flex-col justify-between">
          <img src="../assets/candidate_svg.png" class="object-none svg1" alt="">
          <img src="../assets/candidate-svg2.png" class="object-none" alt="">
        </div>
        <div class="cand_text lg:mt-[13%] flex-1">
          <p class="lg:w-2/3 italic">“Ancile sets itself apart by taking the time to get to know me, my strengths, weaknesses, likes and dislikes and career aspirations. As a result, Ancile placed me in a place I truly enjoy and it is one in which I feel I can succeed”</p>
          <p class="text-sm mt-10"><span class="font-bold">Candidate</span> <span class="italic">Financial Industry</span></p>
        </div>
        <div class="cand_img flex-1">
          <img src="../assets/candidate_woman.png" alt="">
        </div>
      </div>

      <RegionSection class="mt-10"/>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 480px) {

  .feat {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .left {
    display: none;
  }

  .right {
    /* justify-content: center; */
    text-align: center;
    align-items: center;
    padding-bottom: 4rem;
    padding-top: 4rem;
  }

  .right h3 {
    margin-left: 18%;
    font-size: 1.9rem;
  }

  .cand_text {
    /* margin-top: -10px; */
    padding-left: -30%;
  }

  .cand_svg{
    padding-right: -50%;
  }

  .cand_svg img {
    width: 30%;
  }

  .cand_img {
    display: none;
  }
}
</style>
