<template>
  <div>
   
   <button @click="clickme">click</button>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  data(){
    return {
      sumnumber:0,
      age:0,
      id:0

    }
  },methods:{
    clickme(){
      this.age++;
      this.sumnumber++;
      this.id++;
    }
  },
  setup() {
    const sumnumber = inject('sumnumber');
    const age = inject('age');
    const id =inject('id') 

    return { sumnumber, age,id }
  }
}
</script>
