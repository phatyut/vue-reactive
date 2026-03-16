<template>
    <div class=" ">
        {{ state.count }}
        {{ state.number }}
        {{ state.newvalue }}
    </div>
    <div class=" border-l-2 border-r-2 relative w-full h-96 grid grid-cols-5 justify-evenly items-end gap-10">
        <div :style="checkwater">{{ state.water }}</div>
        <div :style="checkwater">{{ state.water }}</div>
        <div :style="baststyle" class="flex justify-center"> {{ state.count }}</div>
        <div :style="checkwater">{{ state.water }}</div>
        <div :style="checkwater">{{ state.water }}</div>
    </div>

   
</template>
<script>
import {inject,computed} from 'vue'
export default{
    data(){
        return {

           
        }

    },

    setup(){
        const state = inject("state");

        const checkwater= computed(()=>{
             let green = 'green';
                        if(state.water ==100){
                            green='yellow'
                        }else if(state.water >150){
                            green='red'
                        }
            return{
                        width:state.newvalue+'px',
                        height:state.water+'px',
                        backgroundColor:green,
            }
        })
        const baststyle = computed(()=>{
                        let red = 'red';
                        if(state.count ==100){
                            red='blue'
                        }else if(state.count >150){
                            red='green'
                        }else if(state.water >200){
                                alert("over ")
                                state.water = 200
                        }
                          
                   return {          
                        width:state.newvalue+'px',
                        height:state.count+'px',
                        backgroundColor:red,
                    }})

        return {
            state,
            baststyle,
            checkwater
        }
    }
}
</script>