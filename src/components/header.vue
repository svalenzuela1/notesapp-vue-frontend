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
      <b-navbar-item href="#">
        <router-link to="/about">About</router-link>
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
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
<!--          <a class="button is-primary">-->
<!--            <strong>Sign up</strong>-->
<!--          </a>-->
<!--          <a class="button is-light">-->
<!--            Log in-->
<!--          </a>-->
          <router-link to="/login" v-bind:URL="URL">Log in</router-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
name: "Header"
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
