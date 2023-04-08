import App from './App.vue'
import './assets/main.css'
import router from './router/index.js'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.mount('#app')
app.use(pinia)