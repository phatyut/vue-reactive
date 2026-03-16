<template>
  <div>
    <h3>Child Component</h3>
    <p>Injected count: {{ state.count }}</p>
    <p>Injected number: {{ state.number }}</p>
    <p>This add new {{ state.newvalue }}</p>
    <div>water {{ state.water }}</div>


    <!-- Child can update values -->
    <button @click="state.count++" class=" underline">Increase count</button>
    <button @click="state.water+=10" class=" underline">water</button>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  setup() {
    // Inject the reactive object
    const state = inject("state")

    return { state }
  }
}
</script>
