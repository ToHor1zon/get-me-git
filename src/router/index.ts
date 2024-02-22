import { createRouter, createWebHistory } from 'vue-router'
import SkillsPage from '../pages/SkillsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SkillsPage
    },
  ]
})

export default router
