<template>
    <div>
        <input type="range" max="100" min="1" step="1" v-model="view">{{ view }}
        <ol>
            <li v-for="element in items" :key="element">{{ element }}</li>
        </ol>
        <button @click="btnstop">Stop</button>
    </div>
</template>
<script>
export default{
    data(){
        return{
            view:0,
            items:[],
            btnstop:null
        } 
    },mounted(){
        this.btnstop=this.$watch('view',function(old,newvalue){
            this.items.push(old,newvalue)
        })
    }
}

</script>