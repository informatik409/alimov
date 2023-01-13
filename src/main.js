import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './components/app/App.vue'
import router from './router'
import '@/assets/css/style.css'




const app = createApp(App)
app.use(MotionPlugin)
app.use(router)
app.use(autoAnimatePlugin)


app.mount('#app')
