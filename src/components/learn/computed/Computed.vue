<template>
<div>
    <button @click="this.checkbool">{{ addandremove }}</button>
    this is a computed
</div>
</template>
<script>
export default{
    data(){
        return {
            checkbool :false
        }
    },
    computed:{
        addandremove(){

        }
    }    
}

</script>