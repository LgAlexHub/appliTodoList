<template>
  <nav class="teal lighten-3" style="padding-left: 2%">
    <div class="nav-wrapper">
      <a><router-link to="/home"><i class="material-icons">arrow_back</i></router-link></a>
    </div>
  </nav>
  <div v-if="this.message!==''">
    {{this.message}}
  </div>
  <div class="row" style="margin-top: 5%">
    <div class="col s4"></div>
    <div class="col s4">
      <h5 class="center">Register to our application</h5><br>
      <label for="name">Nom :<input id="name" type="text" v-model="name"></label><br>
      <label for="email">Email :<input type="text" id="email" v-model="email"></label><br>
      <label for="password">Mot de passe :<input type="password" v-model="password" id="password"></label><br>
      <div class="row">
        <div class="col s6">
          <button v-on:click="registerFeedback({name:this.name,email:this.email,password:this.password})"
                  class="waves-effect waves-light btn">
            Register</button><br>
        </div>
        <div>
          <router-link to="/login"><button class="waves-effect waves-light btn">already register ?</button></router-link>
        </div>
      </div>
    </div>
    <div class="col s4"></div>
  </div>
</template>
<script>
  import { mapActions} from "vuex";
  export default {
    data(){
      return{
        name:"",
        password: "",
        email: "",
        message: ""
      }
    },
    methods:{
      ...mapActions("account",["register"]),
      registerFeedback(data)
      {
        this.register(data).then(res=>{
          this.message=res
        })
      }
    }
  }
</script>