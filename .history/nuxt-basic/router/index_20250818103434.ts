import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '@/pages/index.vue'  // ต้อง import component
import Login from '~/components/login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Login,
    children: [
      {
        path: 'login',       // จะได้ /login
        name: 'loginModal',
        component: index      // ใช้ Home เหมือนเดิม (popup อยู่บนหน้าเดิม)
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router