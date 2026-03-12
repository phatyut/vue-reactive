<template>
  <div class="flex flex-col">
    <div class="flex *:px-3.5 *:py-1 *:rounded-2xl *:bg-gray-700 gap-1.5">
      <div>
        <button @click="checkcomponent = 'Creates'"> Created</button>
      </div>
      <div>
        <button @click="checkcomponent = 'Beforecreate'"> BeforeCreate</button>
      </div>
      <div>
        <button @click="checkcomponent = 'BeforeUpdate'"> BeforeUpdate</button>
      </div>
      <div>
        <button @click="checkcomponent = 'Unmount'"> Unmount</button>
      </div>
    </div>

    <div>
      <keep-alive>
          <component :is="checkcomponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Creates from './Creates.vue'
import Beforecreate from './Beforecreate.vue'
import BeforeUpdate from './BeforeUpdate.vue';
import Unmount from './Unmount.vue';

export default {
  components: {
    Creates,
    Beforecreate,
    BeforeUpdate,
    Unmount
  },
  data() {
    return {
      checkcomponent: 'Creates' // default component
    }
  }
}
</script>
