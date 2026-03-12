<template>
  <div>
    <div>{{ counter }}</div>
    <!-- <div>{{ refone }}-{{ reftwo }}</div> -->
    <div>{{ firstname }} {{ lastname }}</div>
      <div class="grid grid-cols-4 *:text-center *:bg-gray-700 gap-10 *:py-2.5 *:rounded-2xl">
        <div><button @click="componentId='Page1'" class=" cursor-pointer">page1</button></div>
        <div><button @click="componentId='Page2'" class=" cursor-pointer">page2</button></div>
        <div><button @click="componentId='Page3'" class=" cursor-pointer">page3</button></div>
        <div><button @click="componentId='Page4'" class=" cursor-pointer">page4</button></div>
    </div>
    <div>
        <keep-alive>
            <component :is="componentId"></component>
        
        </keep-alive>
    </div>
   
  </div>
</template>

<script>
import { ref, provide,toRefs,reactive } from 'vue'
import Page1 from './Pageone.vue'
import Page2 from './Pagetwo.vue'
import Page3 from './Pagethree.vue'
import Page4 from './pagefour.vue'

export default {
  components: { Page1, Page2, Page3, Page4 },
  data(){
    return {
            componentId:'page1'
    }
  },
  setup() {
  const counter = ref(100000000);
        provide("counter",counter);
       
   const fullnames = reactive({
     firstname:'thisis a firstname',
     lastname : 'this is a lastname',
   })
        provide("hero",fullnames)


    return { 
      counter,
      ...toRefs(fullnames),
      
    }
  }
}
</script>
