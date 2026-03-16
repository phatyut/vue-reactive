<template>
  <div>
    this root one
    <div>
      <!-- remove "this." -->
      <!-- <button @click="$root.roots = 'love you'">change root</button> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RootOne'
})
</script>
