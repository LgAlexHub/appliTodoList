<template>
    <div>
        <form>
          <label for="login">Identifiant : <input type="text" id="login" v-model="login"></label><br>
          <label for="password">Mot de passe : <input type="password" id="password" :v-model="password"></label><br>
          <button>Connection</button>
        </form>
    </div>
</template>
<script>
//import { mapActions, mapGetters} from "vuex";
export default {
  data(){
    return {
      login: "",
      password: ""
    }
  },
  methods:{
    //...mapActions("",[""]),
  }
}
</script>