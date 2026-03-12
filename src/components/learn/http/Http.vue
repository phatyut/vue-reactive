<template>
  <div class="flex flex-col">
    <h2 class="text-3xl text-center text-green-700/40 uppercase ">
      This is a how to use HTTP
    </h2>
    <div>
      <button
        class="bg-gray-600/40 text-gray-500/80 p-5 uppercase hover:underline hover:decoration-green-500/30 hover:text-gray-500 rounded-2xl"
        @click="clickme"
      >
        show data by fetch
      </button>
    </div>
    <div class="flex flex-col">
      <div class="flex justify-center items-center">Json file :{{ jsonfile }}</div>
      <div class="flex justify-center items-center">txt file:{{ txtfile }}</div>
    </div>
    <hr>
    <p>Click the button to fetch data from a local JSON file.</p>
    <button @click="fetchData">Fetch data</button>
    <div v-if="data" id="dataDiv">
      <img :src="data.avatar" alt="avatar">
      <pre>{{ data.first_name + " " + data.last_name }}</pre>
      <p>"{{ data.employment.title }}"</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      jsonfile: null,
      txtfile: null,
      data: null,
      users: [] // store all users here
    }
  },
  methods: {
    async clickme() {
      let storedata = await fetch("../../../../public/data/text.json");
      let txt = await fetch("../../../../public/data/text.txt");
      this.jsonfile = await storedata.json();
      this.txtfile = await txt.text();
    },
    async fetchData() {
      const response = await axios.get("../../../../public/user.json");
      this.users = response.data;
      this.changeRandomUser(); // show one immediately
      this.startAutoChange();  // start auto-change every second
    },
    changeRandomUser() {
      if (this.users.length > 0) {
        const randomIndex = Math.floor(Math.random() * this.users.length);
        this.data = this.users[randomIndex];
      }
    },
    startAutoChange() {
      setInterval(() => {
        this.changeRandomUser();
      }, 1000); // change every 1 second
    }
  }
}
</script>
