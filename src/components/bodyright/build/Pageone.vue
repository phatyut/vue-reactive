<template>
  <div>
    <div>

      {{ number }}
    </div>
    <div>
      {{ firstname }}
    </div>
    <div>
      {{ lastname }}

    </div>
  </div>
</template>
<script>
import {inject ,toRefs} from 'vue'
export default{
  data(){
    return {

    }
  },
  setup(){
    const number = inject("counter",0);
    const fullnames = inject("hero",{})
    return {
      number,
      ...toRefs(fullnames)
    }
  }
}


</script>