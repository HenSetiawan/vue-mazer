import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/Login/LoginView.vue'
import MainView from '@/views/Dashboard/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/dashboard',
      children: [
        {
          path: '',
          name: 'Main',
          component: MainView
        },
      ]
    }
  ]
})

export default router
