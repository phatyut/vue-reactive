<template>
    <input type="text" v-model="lovetext">
    <div @click="clickhere" >clike{{ counter }}</div>
    <div v-text="lovetext">

       
    </div>
</template>
<script>
export default{
    data(){
        return {
            lovetext:"this is a text and I love text ",
            counter:100
        }
    },methods:{
        clickhere(){
            this.$data.counter= 1000;
        }
    }
}


</script>