import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';
import axios from 'axios';
import 'amfe-flexible/index.min.js';
import Vant from 'vant';
import 'vant/lib/index.css'; // 全局引入样式
import './assets/less/common.less'

let app = createApp(App)
app.config.globalProperties.$http=axios
app.use(router)
app.use(Vant)
app.mount('#app')
 