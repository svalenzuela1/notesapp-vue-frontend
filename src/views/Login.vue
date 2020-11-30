<template>
  <section>
    <b-checkbox v-model="hasError">Show errors</b-checkbox>

    <b-field label="Username"
             :type="{ 'is-danger': hasError }"
             :message="{ 'Username is not available': hasError }">
      <b-input value="username" maxlength="30" v-model='username'/>
    </b-field>

    <b-field label="Password"
             :type="{ 'is-danger': hasError }"
             :message="[
                { 'Password is too short': hasError },
                { 'Password must have at least 8 characters': hasError }
            ]">
      <b-input value="password" type="password" maxlength="30" v-model='password'></b-input>
    </b-field>
    <button v-on:click="handleLogin">Login</button>
  </section>
</template>


<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Login',
  data(){
    return{
      hasError: true
    }
  },
  loginData: function(){
    return {
      username: '',
      password: '',
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
      .then(data => console.log(data))
    }
  }

}
</script>
