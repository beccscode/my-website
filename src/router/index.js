import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Test from "@/views/Test";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/test',
    name: 'test',
    component: Test
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
