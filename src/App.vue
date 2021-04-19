<template>
  <div id="app">
    <div id="nav">
    </div>
    <Header v-bind:URL="URL" v-bind:loggedIn="loggedIn" @logout="logout"/>

<!-- router creates the event not the header -->
    <router-view @loggedIn="login($event)"/>
<!--    <Footer/>-->
  </div>
</template>

<script>
import Header from './components/Header.vue'
//import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    //Footer
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
      this.$router.push({ path: 'Notes', query: {token: this.token}, URL: this.URL})

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
  /*background: rgb(2,0,36);*/
  /*background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,48,122,0.7162722491909386) 35%, rgba(0,212,255,1) 100%);*/
  /*background-image: url("https://images.unsplash.com/photo-1541422348463-9bc715520974?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMG1vdW50YWlufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80");*/
  /*background-repeat: no-repeat;*/
  /*background-size: cover;*/
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
