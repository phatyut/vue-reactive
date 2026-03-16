<template>
    <div>
        <propemit @dropemit="pleasedrop"></Propemit>
    </div>

</template>
<script>
import Propemit from './Propemit.vue';
export default{
    components:{Propemit},
    data(){
        return {

        }
    },methods:{
        pleasedrop(names){
            alert(names)
        }
    }
}
</script>