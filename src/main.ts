import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';
import axios from 'axios'

let app = createApp(App)
app.config.globalProperties.$http=axios
app.use(router)
app.mount('#app')
 