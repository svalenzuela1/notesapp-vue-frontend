<template>
  <div class="about">
    <ul>
<!--      <li v-for="note of notes" v-bind:key="note.id">{{note.message}}</li>-->
      <b-message class="postedNotes" v-for="note of notes" v-bind:key="note.id" title="Notes" type="is-dark" has-icon icon="account" aria-close-label="Close message">
        {{note.message}}
      </b-message>
    </ul>

    <div class="field is-grouped" id="saveAndDelete">
      <p class="control">
        <button class="button is-link">
          Save Post
        </button>
      </p>
      <p class="control">
        <button class="button">
          Cancel
        </button>
      </p>
      <p class="control">
        <button class="button is-danger">
          Delete Post
        </button>
      </p>
    </div>
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

#saveAndDelete{
  display: flex;
  justify-content: center;
}
</style>
