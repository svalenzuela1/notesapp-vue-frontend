<template>
  <div class="about">
    <h1>Hello</h1>
    <button v-on:click="getNote">Test</button>
  </div>
</template>


<script>
export default {
  name: "Notes",
  props: true,
  token: null,
  URL: 'http://localhost:3000',
  data: function(){
  return {
    notes: [],
    message: ''
  }
}
,
  methods: {
    getNote: function(){

      fetch(`${this.URL}/notes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`
        }
        .then(response => response.JSON())
        .then(data => {
          console.log("working", data)
        })
      })
    }
  }
}
</script>
