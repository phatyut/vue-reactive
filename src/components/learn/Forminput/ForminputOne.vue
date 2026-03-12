<template>
  <div class="grid grid-cols-3 *:border *:border-white gap-5 *:overflow-hidden ">

    <div class="flex flex-col">
      <div><input type="radio" name="checkone" value="numberone" v-model="checkradio">one</div>
      <div><input type="radio" name="checkone" value="numbertwo" v-model="checkradio">two</div>
      <div><input type="radio" name="checkone" value="numberthree" v-model="checkradio">three</div>
      <div><input type="radio" name="checkone" value="numberfour" v-model="checkradio">four</div>
      <div><button @click="pleaseclick" class=" hover:cursor-pointer hover:bg-white hover:text-black hover:rounded-2xl p-3.5">show Item</button></div>
      <div>{{ result }}</div>
    </div>

    <div class="flex flex-col">
      <div><input type="checkbox" value="numberone" v-model="boxcheck">one</div>
      <div><input type="checkbox" value="numbertwo" v-model="boxcheck">two</div>
      <div><input type="checkbox" value="numberthree" v-model="boxcheck">three</div>
      <div><input type="checkbox" value="numberfour" v-model="boxcheck">four</div>
      <div><input type="checkbox" value="numberfive" v-model="boxcheck">five</div>
      <div><button @click="checkboxplease" class=" hover:cursor-pointer hover:bg-white hover:text-black hover:rounded-2xl p-3.5">show Item</button></div>
      <div>{{ checkboxresult }}</div>
      
    </div>

    
    <div class="flex flex-col">
      <form action="" @submit.prevent="pleaseselect">

        choice:  <select name="" id="" v-model="elementselect" multiple>
                <option disabled value=""> Plese select anyone</option>
                <option> numberone</option>
                <option> numbertwo</option>
                <option> numberthree</option>
                <option> numberfour</option>
          </select>
            <div><button type="submit" class=" hover:cursor-pointer hover:bg-white hover:text-black hover:rounded-2xl p-3.5">show Item</button></div>
      </form>
      <div>{{ selectresult }}</div>
      
    </div>


    <div class="flex flex-col">
      <div>
        <textarea name="" id="" v-model="areatext"  class="border border-white" ></textarea>
        <div><button @click="clicktextarea">add text</button></div>
        <div>{{ showtextarea }}</div>
      </div>

    </div>



    <div>
      <form action="" @submit.prevent="pleasesubmitform">
        <div><input type="file" class=" border border-white" @change="pleasechange"></div>
        <div><input type="file" class=" border border-white" @change="ortherpleasechange"></div>
        <button type="submit">Add File</button>
      </form>
      <div>{{ viewsubmit }}-{{ ortherviewsubmit }}</div>

    </div>

    <div>
      <form action="" @submit.prevent="pleaseselectcolor">
        <input type="color" v-model="checkcolor">
        <div><button type="submit">Select Color</button></div>
      </form>
      <div>{{ viewcolor }}</div>
    </div>

  
  </div>
</template>

<script>
export default{
  data(){
    return {
        result:'',
        boxcheck:[],
        checkboxresult:'',
        selectitem:'',
        selectresult:'please select on items',
        elementselect:'',
        areatext:'',
        showtextarea:'please submit',
        viewsubmit:'',
        ortherviewsubmit:'',
        absvalue:null,
        ortherabsvalue:null,
        viewcolor:''
    }
  },methods:{
    pleaseclick(){
      if(this.checkradio){
        this.result= this.checkradio
      }
    },checkboxplease(){
      if(this.boxcheck){
        this.checkboxresult=  this.boxcheck
      }
    },pleaseselect(){
      this.selectresult = this.elementselect
    },clicktextarea(){
      this.showtextarea = this.areatext
    },pleasesubmitform(){
      this.viewsubmit = this.absvalue;
      this.viewsubmit = this.ortherabsvalue;
    },pleasechange(testevents){
        this.absvalue = testevents.target.value;
    },ortherpleasechange(testeventse){
        this.ortherabsvalue = testeventse.target.value;
    },pleaseselectcolor(){
      this.viewcolor = this.checkcolor;
    }
  }
}
</script>