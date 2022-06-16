import { createApp } from 'vue'
import { router } from '@/router'
import App from './App.vue'
import '@unocss/reset/normalize.css'
import 'uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/style/index.scss'
import '@/style/github-markdown.css'
import '@/style/prism.scss'
import 'uno:whidy.css'
const app = createApp(App)
app.use(router)
app.mount('#app')
