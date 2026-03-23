<template>
  <div>
    <p>Grandchild Component</p>
    <div>{{ ctwo }}</div>
    <input
      type="text"
      :value="ctwo"
      @input="$emit('update:ctwo', $event.target.value)"
      placeholder="ctwo"
    />
  </div>
</template>

<script>
export default {
  props: {
    ctwo: String
  },
  emits: ['update:ctwo']
}
</script>
