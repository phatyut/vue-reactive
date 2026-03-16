<template>
    <div class="flex flex-col">
       <input type="text" ref="add" v-model="pulldata" class="border pl-3.5 border-white">
        <button @click="addpulldata">Add Text</button>

<ol>
  <li ref="result" v-for="love in loves" :key="love">{{ love }}</li>
</ol>

    </div>

    <div>
        <WatchOne></WatchOne>
    </div>
</template>
<script>
import WatchOne from './WatchOne.vue';
export default{
    
    components:{
        WatchOne
    } ,
    data(){
        return {
            showresult:'',
            
            pulldata:[],
            loves:[]
        }
    }
    
    ,methods:{
       addpulldata(){
         if (this.$refs.add.value !== '') {
            this.loves.push(this.pulldata);
            this.$refs.add.focus() // clear input
            this.$refs.add.value = '';
            this.$refs.add.clear;
            }
       }
    }
   
    
    ,mounted(){
    this.$refs.add.focus()
       
    }
}
</script>