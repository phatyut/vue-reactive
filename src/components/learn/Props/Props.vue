<template>
    <div class="flex flex-col gap-3">
        <div><label for="">Personal:</label><input type="text" placeholder="Name..." v-model="personal"></div>
        <div><label for="">Name:</label><input type="text" placeholder="Name..." v-model="name"></div>
        <div><label for="">Age:</label><input type="number" placeholder="Age..." v-model="age"></div>
        <div><label for="">Gmail:</label><input type="email" placeholder="Age..." v-model="email"></div>
        <div><label for="">password:</label><input type="email" placeholder="Age..." v-model="password"></div>
        <div><label for="">Last One:</label><input type="email" placeholder="Age..." v-model="lastone"></div>
        <hr>
        <div class="flex flex-col justify-center items-center">
            <p>Parent page: <span class="text-red-900 text-8xl"> 1</span></p>
            <p> Personal:{{ personal }}</p>

        </div>
        <hr>
        <div class="flex flex-col justify-center items-center">
            <p>Child page:<span class="text-red-900 text-8xl"> 2</span> </p>
             <div>
                    <Cprops 
                            :personal="personal" 
                            :name="name" 
                            :age="age" 
                            :email="email" 
                            :password="password"
                            :lastone="lastone"/>
                    </div>   
        </div>

    </div>
</template>
<script>
import Cprops from './Cprops.vue';
export default{
    components:{Cprops},
    data(){
        return {
            personal:'',
            name:'',
            age:null,
            email:null,
            password:"",
            lastone:''
        }
    }
}

</script>
<style scoped>
input {
    border: 1px solid gray ;
    outline: none;
    padding-left: 10px;
}
</style>