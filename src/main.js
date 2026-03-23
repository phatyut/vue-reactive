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
import Animationplaincss from './components/learn/animation/Animationplaincss.vue'
import AnimateVfor from './components/learn/animate_vfor/Animate_vfor.vue'
import Attrs from './components/learn/attrs/Attrs.vue'
import Propslearning from './components/learn/Props/Props.vue'
import Root from './components/learn/root/Root.vue'
import Watch from './components/learn/watch/Watch.vue'
import inputModel from './components/learn/inputModel/inputModel.vue'
import Von from './components/learn/Von/Von.vue'
import Computed from './components/learn/computed/Computed.vue'
//_____________Builds__________________________
import Builds from './components/bodyright/build/Builds.vue'
//_____________reactive __________________________
import Firstsetup from "./../src/components/reactive/Reactive.vue"
import Reactivity from './components/reactive/reactivity/Reactivity.vue'
import Props from './components/reactive/props/Props.vue'

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
    { path: '/animationplaincss', component:Animationplaincss},
    { path: '/animateVfor', component:AnimateVfor},
    { path: '/attrs', component:Attrs},
    { path: '/propslearning', component:Propslearning},
    { path: '/root', component:Root},
    { path: '/watch', component:Watch},
    { path: '/inputmodel', component:inputModel},
    { path: '/von', component:Von},
    { path: '/computed', component:Computed},
    // ____________Build___________________
    { path: '/builds', component:Builds},
    // ____________reactive_________________
    {path:'/firstsetup',component:Firstsetup},
    {path:'/reactivity',component:Reactivity},
    {path:'/props',component:Props},
  ],
})
app.component("Bodyleft",Bodyleft);
app.use(routers);
app.mount('#app');
