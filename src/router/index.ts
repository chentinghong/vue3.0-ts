import { createWebHashHistory, createRouter } from 'vue-router'
import Demo from '../components/demo.vue'
import Index from '../components/index.vue'
const routes = [
    { path: '/', component: Index },
    { path: '/demo', component: Demo },
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes,
})

export default router