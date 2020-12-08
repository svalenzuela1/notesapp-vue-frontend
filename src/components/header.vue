<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
            src="https://cdn1.iconfinder.com/data/icons/ios-11-ui-elements-vol-2/29/notes_ios_x_iphone_ui-103-512.png"
            alt="notes"
        >
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#">
        <router-link to="/">Home</router-link>
      </b-navbar-item>
<!--      <b-navbar-item href="#">-->
<!--       -->
<!--      </b-navbar-item>-->
      <b-navbar-dropdown label="Info">
        <router-link to="/notes">Notes</router-link>
        <b-navbar-item href="#">
          About
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">

          <router-link to="/login" v-bind:URL="URL"><b-button type="is-primary is-light" v-if="!loggedIn">Log In</b-button></router-link>

          <b-button type="is-primary is-light" v-if="loggedIn" @click="logout">Log Out</b-button>

        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
name: "Header",
  props: ['URL', 'loggedIn'],
  methods: {
  logout: function(){
    this.$emit('logout')
  }
  }

}
</script>

<style scoped>
nav {
  width: 80%;
  margin: 10px auto;
}

img{
  height: 50px;
  width: 30px;
}

</style>
