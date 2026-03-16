<template>
    <div class="flex flex-col">
        <div class="flex gap-5">
            <button>Add One</button>
            <button>Add 5</button>
            <button>sort</button>
            <button>not sort</button>
        </div>
        <div>
            <TransitionGroup>
                <div 
                        v-for="x in items" 
                        :key="x.indexkey" 
                        :style="{color:'hsl(90,90%,90%)'}">
                    {{x}}
                </div>
            </TransitionGroup>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            items:['one','two','three']
        }
    }
}
</script>
