<template>
  <div class="about">
    <ul>
      <li v-for="note of notes" v-bind:key="note.id">{{note.message}}</li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "Notes",
  data: function(){
  return {
    notes: [],
    message: ''
  }
},
  created: function(){
    //const token = this.$route.query
    console.log(this.$route.query)

    fetch('http://localhost:3000/notes', {
      method: 'get',
      headers: {
        Authorization: `bearer ${this.$route.query.token.token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      this.notes = data
    })
  },
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
