import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/index.vue'  // ต้อง import component

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'login',       // จะได้ /login
        name: 'loginModal',
        component: Home      // ใช้ Home เหมือนเดิม (popup อยู่บนหน้าเดิม)
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router