<template>
    <div class="flex flex-col gap-5">
        <div class="flex flex-row gap-5 justify-center items-center">
            <button class="bg-gray-700 py-1 px-8  rounded-[5px] text-gray-500  hover:border-b border-blue-800" @click="this.componentId='Vonpassive'">Passive</button>
            <button class="bg-gray-700 py-1 px-8  rounded-[5px] text-gray-500  hover:border-b border-blue-800" @click="this.componentId='Vonstop'">Stoped</button>
            <button class="bg-gray-700 py-1 px-8  rounded-[5px] text-gray-500  hover:border-b border-blue-800" @click="this.componentId='Vontext'">text</button>
          
        </div>
        <hr>
        <div>
            <KeepAlive>
                <component :is="componentId"></component>
            </KeepAlive>
        </div>

       
    </div>
</template>
<script>
import Vonpassive from "./Vonpassive.vue"
import Vonstop from "./Vonstop.vue";
import Vontext from "./Vontext.vue";
export default{
    components:{
        Vonpassive,
        Vonstop,
        Vontext
    },
    data(){
        return {
            componentId:null
        }
    }
}
</script>