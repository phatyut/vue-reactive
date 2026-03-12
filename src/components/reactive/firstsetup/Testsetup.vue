<template>
  <div>
    <div>{{ numbertwo }}</div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

// Inject the provided ref
const numbertwo = inject('numbertwo');
</script>
