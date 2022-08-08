import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from '@/views/HomeView.vue'
const routes: Array<RouteRecordRaw> = [
  { path: '/', component: HomeView },
  { path: '/other', component: () => import('../views/OtherView.vue') },
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router