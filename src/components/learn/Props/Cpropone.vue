<template>
    <div v-bind="$attrs" class="flex flex-col">
        <div>Email:{{ email }}</div>
        <div>Password:{{ password }}</div>
        <hr>


        <div><Cproptwo :lastone="lastone"></Cproptwo></div>
    </div>
</template>
<script>
import Cproptwo from './Cproptwo.vue';
export default{
    components:{Cproptwo},
    props:{
        email:String,
        password:String,
        lastone:String
    }
}
</script>