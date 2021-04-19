<template>
  <section>

<div class="login">
    <b-field label="Username">
      <b-input class="username" value="username" maxlength="30" v-model='username'/>
    </b-field>

    <b-field label="Password">
      <b-input class="password" value="password" type="password" maxlength="30" v-model='password'></b-input>

    </b-field>

<!--  <button v-on:click="handleLogin">Log In</button>-->
  <b-button focused v-on:click="handleLogin">Log In</b-button>

</div>
<!--<div class="createAccount">-->
<!--    <b-collapse :open="false" aria-id="contentIdForA11y1">-->
<!--      <button-->
<!--          class="button is-primary"-->
<!--          slot="trigger"-->
<!--          aria-controls="contentIdForA11y1">Create An Account</button>-->
<!--      <div class="notification">-->
<!--        <div class="content">-->
<!--          &lt;!&ndash;        create account goes here&ndash;&gt;-->

<!--          <b-field label="Username"-->
<!--                   type="is-success"-->
<!--                   >-->
<!--            <b-input maxlength="30" v-model="createUN"></b-input>-->
<!--          </b-field>-->

<!--          <b-field label="Password"-->
<!--                   type="is-warning"-->
<!--                   >-->
<!--            <b-input type="password" maxlength="30" v-model="createPW"></b-input>-->
<!--          </b-field>-->
<!--          <b-button focused v-on:click="handleSignup">Create Account</b-button>-->

<!--&lt;!&ndash;          create account ends here&ndash;&gt;-->
<!--        </div>-->
<!--      </div>-->
<!--    </b-collapse>-->
<!--</div>-->
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
      username: '',
      password: '',
      createUN: '',
      createPW: '',
      URL: 'https://notesapp-rails.herokuapp.com',
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
          alert("Invalid Credentials")
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
            alert("Sign-Up Unsuccessful. Please Try Again. ")
          } else {
            alert("Thank You For Creating An Account.")
            console.log(data)
          }
      })
    }
  }

}
</script>

<style>
.login, .content{
  width: 50%;
  padding-top: 80px;
  margin: 10px auto;
  margin-bottom: 25px;
  /*background: rgba(black, 0.5);*/
}

.createAccount{
  margin-bottom: 50px;
}


</style>
