import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 导入公共样式css + js
import './assets/css/reset.css'

const app = createApp(App)
app.use(router)
app.mount('#app')