<template>
  <div>
    <div class="flex flex-col p-20">
        <div class="flex *:gap-4">
            <div><button @click="this.componentId = 'ReactivityOne'">componentsOne</button></div>
            <div><button @click="this.componentId = 'ReactivityTwo'">componentsTwo</button></div>
        </div>
        <div>
            <KeepAlive>
                <component :is="componentId"></component>
            </KeepAlive>
        </div>
    </div>
  </div>
</template>

<script>
import { reactive, provide } from 'vue'
import ReactivityOne from './ReactivityOne.vue'
import ReactivityTwo from './ReactivityTwo.vue';

export default {
  components: { 
        ReactivityOne,
        ReactivityTwo
    },
    data(){
        return {
            componentId:'ReactivityTwo'
        }
    },
  setup() {
    // ✅ Parent owns a reactive object
    const state = reactive({
      count: 90,
      number:0 ,
      newvalue:100,
      water:50
    })

    // Provide the whole object
    provide("state", state)

    return { state }
  }
}
</script>
