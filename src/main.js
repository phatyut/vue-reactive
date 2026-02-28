import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
// ___________main pages and main folders____________
import Bodyleft from './components/bodyleft/Bodyleft.vue'
// ___________main pages and main folders____________
import Http from './components/learn/http/Http.vue'

const app = createApp(App)

const routers = createRouter({
  history: createWebHistory(),
  routes: [
    
    { path: '/http', component: Http },
  ]
})
app.component("Bodyleft",Bodyleft)
app.use(routers)
app.mount('#app')
