<template>
    <nav class="teal lighten-3" style="padding-left: 2%">
      <div class="nav-wrapper">
        <a><router-link to="/home"><i class="material-icons">arrow_back</i></router-link></a>
      </div>
    </nav>
    <p v-if="this.message!==''">
      {{this.message}}
    </p>
    <div class="row" style="margin-top: 5%">
      <div class="col s4"></div>
        <div class="col s4">
          <h5>Sign in our application :</h5><br>
          <label for="email">Email : <input type="text" id="email" v-model="email"></label><br>
          <label for="password">Mot de passe : <input type="password" id="password" v-model="password"></label><br>
          <div class="row">
            <div class="col s6">
              <button  class="waves-effect waves-light btn-small"
                       @click="loginFeedback({email: this.email,password: this.password})">Sign up</button>
            </div>
            <div class="col s6">
                <router-link to="/register">
                  <button class="waves-effect waves-light btn-small">Not registed ? Sign up !</button>
                </router-link>
            </div>
          </div>
        </div>
      <div class="col s4"></div>
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