<template>
  <section>
<div>
<!--    <b-tabs v-model="activeTab">-->
<!--      <b-tab-item label="Login">-->

<div class="login">

  <b-tabs v-model="activeTab" position="is-centered" class="block" size="is-medium" type="is-boxed">
<!--LOGIN-->
    <b-tab-item label="Login">
    <b-field label="Username">
      <b-input class="username" value="username" maxlength="30" v-model='username' required/>
    </b-field>

    <b-field label="Password">
      <b-input class="password" value="password" type="password" minlength="8" maxlength="30" v-model='password' required password-reveal/>

    </b-field>

  <b-button focused v-on:click="handleLogin">Log In</b-button>
    </b-tab-item>
    <!--LOGIN-->

    <!--CREATE ACCOUNT-->
    <b-tab-item label="Sign Up">
                <b-field label="Create Username">
                  <b-input maxlength="30" v-model="createUN" required></b-input>
                </b-field>

                <b-field label="Create Password">
                  <b-input type="password" maxlength="30" minlength="8" v-model="createPW" required password-reveal></b-input>
                </b-field>
                <b-button focused v-on:click="handleSignup">Create Account</b-button>
    </b-tab-item>
    <!--CREATE ACCOUNT-->

  </b-tabs>


</div>

</div>
  </section>

</template>


<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Login',
  data(){
    return{
      username: '',
      password: '',
      createUN: '',
      createPW: '',
      URL: 'https://notesapp-rails.herokuapp.com',
      activeTab: 0
    }
  },
  methods: {
    handleLogin: function(){
     // fetch(this.$route.query.URL + '/login', {
      fetch(`${this.URL}/login`, {

        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      })
      .then(response => response.json())
      .then(data =>{
        //console.log(data)

        //this will not allow users that do not exist to log in
        if(data.error){
          this.hasError = true

          //notification of error
          this.$buefy.notification.open({
            duration: 5000,
            message: `Invalid Credentials. Account Does Not Exist.`,
            position: 'is-bottom-right',
            type: 'is-danger',
            hasIcon: true
          })
          // notif.$on('close', () => {
          //   this.$buefy.notification.open('Please Try Again!')
          // })
        } else {

          console.log(data)
          //$emit is a vue method that allows the event to get sent down the router
          this.$emit('loggedIn', data)
        }
      })
    },
    handleSignup: function(){

      fetch(`${this.URL}/users`, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.createUN,
          password: this.createPW
        })
      })
      .then(response => response.json())
      .then(data => {
          if(data.error){
            this.$buefy.notification.open({
              duration: 3000,
              message: `Error When Creating Account. Please Try Again`,
              position: 'is-bottom-right',
              type: 'is-danger',
              hasIcon: true
            })
          } else {
            this.$buefy.notification.open({
              message: 'Thank You For Signing Up! Please Log In!',
              type: 'is-success'
            })
            console.log(data)
          }
      })
    }
  }

}
</script>

<style>
.login{
  width: 50%;
  padding: 80px 40px 80px 40px;
  margin: 10px auto;
  margin-bottom: 25px;
  background: rgba(0, 3, 0, 0.5);
  border-radius: 5px;
}

/*inputs*/
.username, .password{
  /*background-color: inherit;*/
  background: transparent;
  border: none;
}

input[type='text'], input[type='password']{
  background: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid white;
  color: white;
}
/*inputs*/

</style>
