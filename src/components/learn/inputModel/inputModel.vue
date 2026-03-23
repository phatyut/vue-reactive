<template>
    <div>parent:Get {{ name }}</div>
   
    <div v-if="this.name >100" class="bg-green-900 text-6xl">love you so much.this.name > 100</div>
    <div v-else> why love</div>
    <hr>

    <div class="bg-gray-800">
        
        <inputModelOne v-model:name="name" />
    </div>

</template>
<script>
import inputModelOne from "./inputModelOne.vue"
export default{
    components:{inputModelOne},
    data(){
        return {
           
            name:0
        }
    }
}

</script>