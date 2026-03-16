<template>
    <div class="flex flex-col" v-bind="$attrs">
        <div>GrandChild:
            <span class="text-red-900 text-8xl"> 3</span>
        </div>
        <div>Name:{{ name }}</div>
        <div>Age:{{ age }}</div>    
        
        
        <hr>
        <div >
                <Cpropone :email="email" :password="password" :lastone="lastone" class="love"></Cpropone>
        </div> 
    </div>
</template>
<script>
import Cpropone from './Cpropone.vue';
export default{
    components:{Cpropone},
    props:{
        name:String,
        age:Number,
        email:String,
        password:String,
        lastone:String
    }
}
</script>
<style scoped>
.love{
    background-color: red;
}
</style>