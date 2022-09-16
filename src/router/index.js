import { createRouter, createWebHistory } from 'vue-router'
import Test from "@/views/Test";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Test
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
