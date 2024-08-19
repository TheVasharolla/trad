<template>
  <main>
    <div>
      <ConsultantsHeroSection />

      <div class="screen flex py-14 justify-between flex-row">
        <div class="left flex-1" v-motion-slide-visible-once-left>
          <img src="../assets/consultant-feat.png" alt="">
        </div>
        <div class="right ml-10 flex flex-col justify-center flex-1">
          <h3 class="font-bold text-4xl pb-6 w-2/3">Get the job that matches your value!</h3>
          <p class="w-5/6" v-motion-fade-visible-once>
            You’ve got the skills and experience to get things done. There’s a big demand for your talents, be it
            finance,
            accounting, IT, or management, but perhaps you’re still looking for the right fit for your skills and wants
            the flexibility of consulting and project work. That’s where Ancile consulting services comes in. We are
            going
            to sit with you and learn more about what makes you tick.
          </p>
          <br>
          <p class="w-5/6" v-motion-fade-visible-once>
            Creating opporturnity starts with your knowledge and experience, of course, but it also has a lot to do with
            who you are as a person and what’s going to make you happy. Perhaps, it’s the flexibility of 6-9 months
            important project. You tell us.
          </p>
          <br>
          <p class="w-5/6" v-motion-fade-visible-once>
            Then, we will talk to the best companies in the nation and the most innovative players in every industry,
            and
            we will find out what they need and the type of person they are looking for. We help you take your
            experience
            to the next level
          </p>
        </div>
      </div>

      <ClientsSlider />

      <div class="flex py-10 flex-row flex-nowrap screen">
        <div class="left flex-1">
          <img src="../assets/consultants_testimonial.png" alt="">
        </div>
        <div class="right-test flex-1 bg-primary">
          <p class="text-white head text-xl italic p-32" v-motion-slide-visible-once-top >“I want to express my
            appreciation for all that Ancile has done for me over the past 4 years. I’ve enjoyed the varieties of the
            companies I’ve worked with, learning something new at each one. Every time a project came up, I knew that
            Ancile would make sure it was one where my specific skill set would be utilized”</p>
          <p class="text-sm text animate__animated animate__fadeInDown text-white pl-32 pb-7 italic -mt-24"><span
              class="font-bold">Candidate</span> Financial Industry</p>
        </div>
      </div>

      <ConsultantsForm />

      <div class="insights pt-10 screen">
        <div class="insights_container flex flex-col space-y-10 py-5">
          <div class="insights_text flex justify-center items-center space-y-4 flex-col">
            <h3 class="font-bold text-2xl text-center">Ancile Insights</h3>
            <p class="text-center flex max-w-5xl mb-6">Ancile works with clients across industries and ranging in size
              from Fortune 500 to mid-cap growth and PE backed companies. Across all of our client work, we derive new
              insights and implement new ways to help them drive revenue, gain efficiencies and keep costs low. Sharing
              those insights and approaches helps us stay sharp.</p>
          </div>
          <div class="insights_card">
            <InsightCard />
          </div>
        </div>
      </div>

      <RegionSection />
    </div>
  </main>
</template>

<script setup>
import ClientsSlider from '@/components/ClientsSlider.vue';
import ConsultantsForm from '@/components/ConsultantsForm.vue';
import ConsultantsHeroSection from '@/components/ConsultantsHeroSection.vue';
import InsightCard from '@/components/InsightCard.vue';
import RegionSection from '@/components/RegionSection.vue';

// import { onMounted } from 'vue'

// onMounted(() => {
//   window.scrollTo(0, 0)
// })

</script>

<style scoped>
@media (max-width: 480px) {
  .left {
    display: none;
  }

  .right {
    margin-left: 0;
    align-items: center;
    text-align: center;
  }

  .right-test {
    background-image: linear-gradient(to bottom, rgba(0, 35, 83, 0.7), rgba(0, 35, 83, 0.8)), url('../assets/consultants_testimonial.png');
    background-position: center;
    background-size: 10cm;
    background-repeat: no-repeat
  }

  .right-test .head {
    padding: 1rem;
  }

  .right-test .text {
    padding-left: 1rem;
    margin-top: 1rem;
  }
}
</style>
