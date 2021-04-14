import { createWebHistory, createRouter } from 'vue-router'
import Demo from '../components/demo.vue'
import Index from '../components/index.vue'
import Equity from '../components/equity/equity.vue'
import Transfer from '../components/equity/transfer/transfer.vue'
import DoTransfer from '../components/equity/transfer/doTransfer.vue'
import Record from '../components/equity/transfer/record.vue'
import Risk from '../components/equity/risk/risk.vue'
const routes = [
    { path: '/', component: Index },
    { path: '/demo', component: Demo },
    {
        path: '/equity/', component: Equity, children: [
            { path: 'transfer', component: Transfer },
            { path: 'doTransfer', component: DoTransfer,meta:{title:'我要转让'} },
            { path: 'record', component: Record,meta:{title:'转让记录'} },
            { path: 'risk', component: Risk },          
        ]
    },
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。
    history: createWebHistory(),
    routes,
})

export default router