<template>
  <section>
    <b-checkbox v-model="hasError">Show errors</b-checkbox>

    <b-field label="Username"
             :type="{ 'is-danger': hasError }"
             :message="{ 'Username is not available': hasError }">
      <b-input value="username" maxlength="30"></b-input>
    </b-field>

    <b-field label="password"
             :type="{ 'is-danger': hasError }"
             :message="[
                { 'Password is too short': hasError },
                { 'Password must have at least 8 characters': hasError }
            ]">
      <b-input value="password" type="password" maxlength="30"></b-input>
    </b-field>
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
  }

}
</script>
