<template>
  <section>
<!--    <b-checkbox v-model="hasError">Show errors</b-checkbox>-->
<div class="login">
    <b-field label="Username"
             :type="{ 'is-danger': hasError }"
             :message="{ 'Username is not available': hasError }">
      <b-input class="username" value="username" maxlength="30" v-model='username'/>
    </b-field>

    <b-field label="Password"
             :type="{ 'is-danger': hasError }"
             :message="[
                { 'Invalid Password': hasError },

            ]">
      <b-input class="password" value="password" type="password" maxlength="30" v-model='password'></b-input>
    </b-field>

<!--  <button v-on:click="handleLogin">Log In</button>-->
  <b-button focused v-on:click="handleLogin">Log In</b-button>

</div>
<div class="createAccount">
    <b-collapse :open="false" aria-id="contentIdForA11y1">
      <button
          class="button is-primary"
          slot="trigger"
          aria-controls="contentIdForA11y1">Create An Account</button>
      <div class="notification">
        <div class="content">
          <!--        create account goes here-->

          <b-field label="Username"
                   type="is-success"
                   >
            <b-input maxlength="30" v-model="createUN"></b-input>
          </b-field>

          <b-field label="Password"
                   type="is-warning"
                   >
            <b-input type="password" maxlength="30" v-model="createPW"></b-input>
          </b-field>
          <b-button focused v-on:click="handleSignup">Create Account</b-button>

<!--          create account ends here-->
        </div>
      </div>
    </b-collapse>
</div>
<!--    <button v-on:click="handleLogin">Login</button>-->


<!--Suppose to be for create account-->
<!--    <button class="button block" @click="isActive = !isActive">Toggle</button>-->
<!--    <b-notification v-model="isActive" aria-close-label="Close notification">-->
<!--      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit-->
<!--    </b-notification>-->
  </section>

</template>


<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Login',
  data(){
    return{
      hasError: false
    }
  },
  loginData: function(){
    return {
      username: '',
      password: '',
    }
  },
  signupData: function(){
    return {
      createUN: '',
      createPW: ''
    }
  },
  methods: {
    handleLogin: function(){
      fetch('http://localhost:3000/login', {
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
        console.log(data)

        //this will not allow users that do not exist to log in
        if(data.error){
          this.hasError = true
          alert("Invalid Credentials")
        } else {
          //$emit is a vue method that allows the event to get sent down the router
          this.$emit('loggedIn', data)
        }
      })
    },
    handleSignup: function(){

      fetch('http://localhost:3000/users', {
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
            alert("Sign-Up Unsuccessful. Please Try Again. ")
          } else {
            alert("Thank You For Creating An Account. Please Log In.")
          }
      })
    }
  }

}
</script>

<style>
.login, .content{
  width: 50%;
  margin: 10px auto;
  margin-bottom: 25px;
}

.createAccount{
  margin-bottom: 50px;
}


</style>
