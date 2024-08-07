import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/global.css'
import 'virtual:svg-icons-register'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
