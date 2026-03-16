<template>
    <div class="w-50 h-50"  :style="{backgroundColor:this.$data.bool}"></div>
    <div><button @click="this.bool = !this.bool">{{ check }}</button></div>
</template>
<script>
export default{
    data(){
        return {
            color:'red',
            check:'',
            bool:false
        }
    },methods:{
    },computed:{
        check(){
            if(this.bool){
                return 'add';
            } return 'remove';
        }
    }
}
</script>