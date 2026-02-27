<template>
  <div class=" relative w-screen h-screen text-white bg-black gap-30 flex-col flex justify-center items-center">
    <h2 class="text-7xl font-bold uppercase">Welcom vue </h2>
    <div class="w-full h-50 gap-10 flex justify-center items-center">
          <div class="bg-green-500 rounded-2xl">
                <button class="text-4xl font-bold px-10 py-3 hover:underline  " @click="learn">Learn</button>
          </div>
          <div class="bg-green-500 rounded-2xl">
                <button class="text-4xl font-bold px-10 py-3 hover:underline  " @click="reactive">reactive</button>
          </div>



          <div class="fixed top-0 w-screen h-screen bg-green-500" v-show="showlearn">
                 <div class="fixed top-0 gap-10  w-full flex justify-end pl-3.5">
                  <button @click="hidelearn">back</button>
                  </div>
                  <div>
                    <router-link to="/"> learn</router-link>
                  </div>
                  <div>
                    <router-view></router-view>
                  </div>
              
          </div>



          <div class="fixed top-0 w-screen h-screen bg-blue-500" v-show="showreactive">
            <div class="fixed top-0 gap-10  w-full flex justify-end pl-3.5">
              <button @click="hidereactive">back</button>
            </div>

          </div>
          
    </div>

  </div>
</template>
<script>
export default{
  data(){
    return{
      showlearn:false,
      showreactive:false
    }
  },methods:{
    reactive(){
       this.showlearn=false,
      this.showreactive=true
    },hidereactive(){
      this.showlearn=true,
      this.showreactive=false
    },learn(){
     this.showlearn=true,
      this.showreactive=false
    },hidelearn(){
      this.showlearn=false,
      this.showreactive=true
    }
    
  }
}
</script>