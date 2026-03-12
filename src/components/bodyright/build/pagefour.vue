<script>
import { inject } from 'vue'

export default {
  setup() {
    // must match the parent provide key exactly
    const numberOne = inject('numberOne')

    return { numberOne }
  }
}
</script>

<template>
  <div>
    <h3>Page4</h3>
    <p>NumberOne from parent: {{ numberOne }}</p>
  </div>
</template>
