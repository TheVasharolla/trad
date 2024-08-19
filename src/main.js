import './assets/main.css'
import { MotionPlugin } from '@vueuse/motion'

import 'animate.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App, {
  data() {
    return {
      scrollPosition: 0
    }
  }
})


app.use(router)
app.use(MotionPlugin)

app.mount('#app')
