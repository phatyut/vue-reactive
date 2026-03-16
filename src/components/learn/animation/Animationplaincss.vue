<template>
  <div><IntroAnimation /></div>
  <div class="love"></div>
</template>

<script>
import IntroAnimation from './IntroAnimation.vue';
export default {
  components: { IntroAnimation }
}
</script>

<style scoped>
@keyframes newlove{
    0% {
        background-color:blue;
        width: 200px;
        height: 200px;
    }50%{
        background-color: red;
        width: 400px;
        height:200px;
        border-radius:10px
    }
    100%{
        background-color:blue;
         width: 200px;
        height: 200px;
        border-radius: 50%;
    }
}

.love{
    animation: newlove 19s 1s linear infinite;
}
</style>
