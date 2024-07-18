import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/app.scss'
import 'virtual:svg-icons-register'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
