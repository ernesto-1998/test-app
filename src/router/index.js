import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/card',
    name: 'Card',
    component: () => import('../views/TareasCard.vue')
  },
  {
    path: '/redes',
    name: 'Redes',
    component: () => import('../views/RedesSociales.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
