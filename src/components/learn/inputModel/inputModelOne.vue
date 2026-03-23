<template>
    <div>{{ name }}</div>
     CTWO:{{ lovepc }}
    <div><input type="text" :value="name" @input="$emit('update:name',Number($event.target.value))"></div>
    <hr>
    <div><inputModelTwo v-model:ctwo="lovepc" ></inputModelTwo></div>
   
</template>
<script>
import inputModelTwo from './inputModelTwo.vue';
export default{
    components:{inputModelTwo},
    emits:['update:name'],
    props:{name:Number},
    data(){
        return {
           
        }
    }
}
</script>