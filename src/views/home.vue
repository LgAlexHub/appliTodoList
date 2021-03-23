<template>
    <nav style="margin-bottom: 10px; padding-right: 5px" class="teal lighten-3">
      <div class="nav-wrapper ">
        <b>TodoList App</b>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li v-if="isLoged"><a class="waves-effect waves-light btn" v-on:click="logout()">Logout</a></li>
          <li v-else><router-link to="/login">Login</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="row">
      <div class="col s2 " style="height: 100%">
        <sidebar/>
      </div>
      <div class="col s1"></div>
        <div class="col s6">
          <liste/>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/sidebar.vue';
import Liste from '@/components/liste.vue';
import { mapGetters, mapActions} from "vuex";
import M from "materialize-css";

export default {
    components: { 
        Sidebar,
        Liste
    },
    computed:{
      ...mapGetters("account",["getToken","isLoged"])
    },
    methods:{
      ...mapActions("account",["logout"])
    },
    mounted () {
      M.AutoInit()
    }

}
</script>

<style>
.sidebar {
  height: 100%;
  width: 13vw;
  padding: 2vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: lightgray;
  overflow-x: scroll;
  padding-top: 2vh;
}

.liste {
  margin-left: 17vw;
  padding: 0px 10px;
}

.utilBar
{
  margin-left: 20%;
  align-items: end;
}
</style>