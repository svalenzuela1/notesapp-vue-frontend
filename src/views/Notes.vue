<template>
  <div class="about">
    <ul>
<!--      <li v-for="note of notes" v-bind:key="note.id">{{note.message}}</li>-->
      <b-message class="postedNotes" v-for="note of notes" v-bind:key="note.id" title="Notes" type="is-dark" has-icon icon="account" aria-close-label="Close message">
        {{note.message}}

        <p class="control">
          <button class="button is-danger" v-bind:id="note.id" v-on:click="deleteNote">
            Delete Post
          </button>
        </p>
      </b-message>


    </ul>

    <div class="newNote">
    <b-input placeholder="Enter New Message"
             size="is-medium"
             icon="account"
            v-model="message">
    </b-input>
      <p class="control">
        <button class="button is-link" v-on:click="newNote">
          Save Post
        </button>
      </p>
    </div>

  </div>

</template>


<script>
export default {
  name: "Notes",
  props: [URL],
  data: function(){
  return {
    notes: [],
    message: ''
  }
},
  created: function(){
      this.getNotes()
  },
  methods: {
    getNotes: function(){
      fetch(`${URL}/notes`, {
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
    newNote: function(){
      fetch(`${URL}/notes`, {
        method: 'post',
        headers: {
          Authorization: `bearer ${this.$route.query.token.token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({message: this.message})
      })
          .then(response => response.json())
          .then(data => {
            this.notes = data
            this.getNotes()
          })
    },
    deleteNote: function(event){
      const id = event.target.id

      fetch(`${URL}/notes/${id}`, {
        method: "delete",
        headers: {
          authorization: `Bearer ${this.$route.query.token.token}`,
          "Content-Type": "application/json"
        },
      })
      .then(() =>
      this.getNotes())
    }
    }
}
</script>

<style>
.postedNotes{
  width: 50%;
  margin: 20px auto;
  margin-top: 10px;
  font-size: 20px;
}

.newNote{
  width: 40%;
  margin: 20px auto;
}
</style>
