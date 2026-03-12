<template>
  <div>
    Page3 input: {{ one }}
    <input v-model="sharedData.page3" />
  </div>
</template>

<script>
import { inject, ref } from 'vue'

export default {
  setup() {
    const sharedData = inject('sharedData')
    const one =inject('one')

   

    return { sharedData, one }
  }
}
</script>
