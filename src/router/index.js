import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/clients',
      name: 'clients',
      component: () => import('../views/ClientsView.vue')
    },
    {
      path: '/consultants',
      name: 'consultants',
      component: () => import('../views/ConsultantsView.vue')
    },
    {
      path: '/candidates',
      name: 'candidates',
      component: () => import('../views/CandidatesView.vue')
    },
    {
      path: '/productivity',
      name: 'productivity',
      component: () => import('../views/ProductView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },

})

export default router
