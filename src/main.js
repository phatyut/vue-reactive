import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

import Learn from './components/learn/Learn.vue'
import Reactive from './components/reactive/Reactive.vue'

const app = createApp(App)

const routers = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Reactive },
    { path: '/learn', component: Learn }
  ]
})

app.use(routers)
app.mount('#app')
