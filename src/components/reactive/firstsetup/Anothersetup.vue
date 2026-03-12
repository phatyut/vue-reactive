<template>
  <div>
    <div>{{ numberone }}</div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

// Inject the provided ref
const numberone = inject('numbertwo');
</script>
