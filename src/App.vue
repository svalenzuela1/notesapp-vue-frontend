<template>
  <div id="app">
    <div id="nav">
    </div>
    <Header v-bind:URL="URL" v-bind:loggedIn="loggedIn" @logout="logout"/>
<!-- router creates the event not the header -->
    <router-view @loggedIn="login($event)"/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data: function(){
    return{
      loggedIn: false,
      token: "",
      URL: 'http://localhost:3000'
    }
  },
  methods: {
    login: function(event){
      this.loggedIn = true
      this.token = event
      //suppose to switch pages
      this.$router.push('/about')

    },
    logout: function(){
      this.loggedIn = false
      this.token = ""

      this.$router.push('/login')
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
