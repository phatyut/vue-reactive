<template>
  <div>
    <div class="text-center">Please check on <span class="text-red-900">inout folder</span></div>
    <!-- <p>Parent values: {{ sumnumber }} | {{ age }} = {{ sum }}</p>
    <div>{{ id }}</div> -->
    <div v-if="sum >= 100">
      {{ sum }}
      <div>
        <button @click="decre" class="bg-green-900">DeCre</button>
      </div>
    </div>
    
    <Childpro />

    <div :style="stylebox"></div>
  </div>
</template>

<script>
import { ref, provide, computed } from 'vue'
import Childpro from './Childpro.vue'
export default {
  components: { Childpro },
  data(){
    return {
      bg:'red',
    }
  },
  setup() {
    const sumnumber = ref(10)
    const age = ref(10)
    const id = ref(0)
    const sum = computed(() => sumnumber.value + age.value)

    // Provide reactive references
    provide('sumnumber', sumnumber);
    provide('age', age);
    provide('sum', sum);
    provide('id',id)

    const decre = () => {
                          sumnumber.value--   
                          age.value--   
                        };

    const stylebox = computed(()=>{
                                        let bgcolor='red';
                                        if(sum.value ==100){
                                          bgcolor='blue'
                                        }else if(sum.value ==120){
                                          bgcolor='gray'
                                        }


                                        return {
                                      
                                        width: sumnumber.value + 'px',
                                        height: age.value + 'px',
                                        backgroundColor: bgcolor,
                                        borderRadius: sum.value / 2 + 'px'
                                      }})

    return { sumnumber,
             age,
             id,
             sum, 
             decre,
             stylebox 
          }
  }
}
</script>
