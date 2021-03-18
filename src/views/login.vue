<template>
    <p v-if="this.message!==0">
      Marche pas
    </p>
    <div>
      <label for="email">Email : <input type="text" id="email" v-model="email"></label><br>
      <label for="password">Mot de passe : <input type="password" id="password" v-model="password"></label><br>
      <button @click="login(this.email, this.password)">Connection</button>
    </div>
    <div>

    </div>
</template>
<script>
import { mapActions} from "vuex";
import * as API from "../api/index.js";
export default {
  data(){
    return {
      email: "",
      password: "",
      message:0
    }
  },
  methods:{
    login(email, pass){
      API.login(email,pass)
      .then((result) => {
        this.message=result
        if(result===0){
          localStorage.token = API.authToken;
          this.$router.push('home');
        }
        console.log(result)
      })
    }
  }
}
</script>