<template>
  <div>
    Can not  use ROOT
    <h1>{{ roots }}</h1>
    <RootOne />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RootOne from './RootOne.vue'

export default defineComponent({
  name: 'Root',
  components: { RootOne },
  data() {
    return {
      roots: 'initial value'
    }
  }
})
</script>
