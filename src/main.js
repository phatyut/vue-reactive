import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
// ___________main pages and main folders____________
import Bodyleft from './components/bodyleft/Bodyleft.vue'
// ___________________learning ______________________
import Http from './components/learn/http/Http.vue';
import Ref from './components/learn/ref/Ref.vue';
import Lifecycle from './components/learn/lifecycle/LifeCycle.vue'
import ProvideAndInject from './components/learn/Inout/ProvideAndInject.vue'
import Forminput from './components/learn/Forminput/Forminput.vue'
//_____________Builds__________________________
import Builds from './components/bodyright/build/Builds.vue'
//_____________reactive __________________________
import Firstsetup from "./../src/components/reactive/Reactive.vue"
import Reactivity from './components/reactive/reactivity/Reactivity.vue'

const app = createApp(App)
const routers = createRouter({
  history: createWebHistory(),
  routes: [
    
    // __________________learn_____________
    { path: '/http', component: Http },
    { path: '/', redirect:'/http'},
    { path: '/ref', component:Ref},
    { path: '/lifecycle', component:Lifecycle},
    { path: '/provideandinject', component:ProvideAndInject},
    { path: '/forminput', component:Forminput},
    // ____________Build___________________
    { path: '/builds', component:Builds},
    // ____________reactive_________________
    {path:'/firstsetup',component:Firstsetup},
    {path:'/reactivity',component:Reactivity},
  ],
})
app.component("Bodyleft",Bodyleft);
app.use(routers);
app.mount('#app');
