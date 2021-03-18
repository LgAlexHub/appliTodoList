<template>
    <p v-if="this.message!==''">
      {{this.message}}
    </p>
    <div>
      <label for="email">Email : <input type="text" id="email" v-model="email"></label><br>
      <label for="password">Mot de passe : <input type="password" id="password" v-model="password"></label><br>
      <button @click="loginFeedback({email: this.email,password: this.password})">Connexion</button>
    </div>
    <div>

    </div>
</template>
<script>
import { mapActions} from "vuex";

export default {
  data(){
    return {
      email: "",
      password: "",
      message:""
    }
  },
  methods:{
    ...mapActions("account", ['login']),
    loginFeedback(data)
    {
      this.login(data).then(res=>{
        this.message=res
      })
    }
  }
}
</script>