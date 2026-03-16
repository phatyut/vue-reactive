<template>
  <div>
    <div :class="{myclass:checkclass}" class="relative w-10 h-10 bg-red-400"></div>
    <div><button @click="clickanimation">Animation</button></div>
  </div>

  <div>
    <button @click="clickhere">{{ addandremove }}</button>
    <Transition>
      <div v-if="toggle">this love</div>
    </Transition>
  </div>


  <div>
    <button @click="this.text =! this.text">Animation</button>

    <transition>
            <div v-if="text">text</div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkclass: false,
      toggle: false,
      text:false
    }
  },
  methods: {
    clickanimation() {
      this.checkclass = true
    },
    clickhere() {
      this.toggle = !this.toggle
    }
  },
  computed: {
    addandremove() {
      return this.toggle ? "Remove" : "Add"
    }
  }
}
</script>

<style scoped>
.v-enter-from {
    
  opacity: 0;
  rotate: 1turn;
  transition:  200s;
  transform: translate(300px, 0);
  overflow: hidden;
  color:green
}
.v-enter-active {
  transition: all 0.5s ease;
}
.v-enter-to {
  opacity: 1;
  transform: translate(0, 0);
  color: red;
  font-size: large;
    rotate: 0turn;
  transition: v-enter-from 200s;
}

.v-leave-from {
  opacity: 1;
  transform: translate(0, 0);
}
.v-leave-active {
  transition: all 0.5s ease;
}
.v-leave-to {
  opacity: 0;
  transform: translate(-300px, 0);
}

@keyframes animate{
    form{
        opacity: 0;
       transform: translate(-200,0);
    }to{
        opacity: 1;
        transform:translate(0,0) ;
    }
}
</style>
