import { createRouter, createWebHashHistory } from 'vue-router'
import MicroContainer from '../views/MicroContainer.vue'
const router = createRouter({
  history: createWebHashHistory('/'),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MicroContainer
    },
    {
      path: '/data',
      name: 'data',
      component: MicroContainer
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: MicroContainer
    },
    {
      path: '/audit',
      name: 'audit',
      component: MicroContainer
    }
  ]
})

export default router
