<template>
    <div>
        <div >I love you .😍</div>
        <div ref="changetext">Please chioce...</div>
        <div>
            <button @click="clickme">No</button>
        </div>
        <hr>
        <div>
            <input type="text" @input="pleaseinput" ref="getinput" class="border border-white outline-none">
            <div ref="pastinput"></div>
        </div>

        <div class="bg-gray-600/50 flex flex-col ">
                <div 
                        v-for="element in items" 
                        :key="element" 
                        class="flex flex-col" 
                        ref="refelement"
                        >
                        {{ element }}
                </div>
                <div>
                    <button class="bg-gray-800/15" @click="get2element">pick up 3</button>
                </div>
                <div>
                    {{ three }}
                </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return {
            three:"",
               items:["itemone","itemstwo","itemsthree"]
        }
    },methods:{
        clickme(){
            this.$refs.changetext.innerHTML='That door go aways.'
        },pleaseinput(){
            this.$refs.pastinput.innerHTML = this.$refs.getinput.value;       
        }
        ,get2element(){
           this.three = this.$refs.refelement[2].innerHTML;
        }
    }
}

</script>