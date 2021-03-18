<template>
  <div>
    <label for="login">Login :<input type="text" id="login"></label>
    <label for="password">Mot de passe :<input type="password" v-model="password" id="password"></label>
    <label for="passwordConfirmation">Confirmation :<input type="password" v-model="password" id="passwordConfirmation"></label>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        password: "",
        login: ""
      }
    }

  }
</script>