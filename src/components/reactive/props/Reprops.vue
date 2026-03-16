<template>
    {{ fullname }}
    <div><button @click="clickemit">clicking alert</button></div>
</template>
<script>
import    {computed} from 'vue'
export default{
    name:"Reprops",
    props:{
        firstname:{
            type:String
        },
        lastname:{
            type:String
        },
        age:{
            type:Number
        }
    },
    setup(testtext,myalerting){
        const fullname =computed(()=>{
            return `Firstname :${testtext.firstname}    Lastname : ${testtext.lastname}  Age :${testtext.age} `
        })

        function clickemit(){
            myalerting.emit("newfunction" + fullname.value)
        }
        return {
            fullname,
            clickemit
           
            
        }
    
    },methods:{
        clickemit(agr){
            this.$emit("testemit" +agr.fullname)
        }
    }
}
</script>