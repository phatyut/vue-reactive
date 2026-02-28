<template>

    <div>
        <img src="../http/file.txt" alt="">
        thisis  a http
        <button class=" bg-white px-2.5 py-1 rounded-2xl" @click="mydata">show data</button>
        {{ data }}
    </div>
</template>
<script>
export default{
    data(){
        return{
            data:null
        }
    },methods:{
      async  mydata(){
            alert("this is a http data");
            const res = await fetch('../http/file.txt');
            this.data= await  res.text();
        }
    }
}
</script>