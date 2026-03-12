<template>
    <div>
            <div>Count: {{ counter }}</div>
            <div>ReCount :{{Recount }}</div>
            <div>
                <button @click="clickme">count</button>
            </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                    counter:0,
                    Recount:0
            }
        },
        methods:{
            clickme(){
                this.counter++;
            }
        },beforeUpdate(){
            this.Recount++;
            alert("I render before ")
        },updated(){
            
            console.log("updated")
        }
    }
</script>

<style lang="scss" scoped>

</style>