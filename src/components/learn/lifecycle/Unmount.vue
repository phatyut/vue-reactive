<template>
  <div v-if="show">
    <h2 ref="title">Goodbye Demo</h2>
    <button @click="hideComponent">Hide Component</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },
  methods: {
    hideComponent() {
      this.show = false
    }
  },
  beforeUnmount() {
    console.log("beforeUnmount: Component is about to be removed.");
    // DOM is still available here
    console.log(this.$refs.title); // ✅ <h2>Goodbye Demo</h2>
  },
  unmounted() {
    console.log("unmounted: Component has been removed.");
    // DOM is no longer available
    console.log(this.$refs.title); // ❌ undefined
  }
}
</script>
