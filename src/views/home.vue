<template>
    <div v-if="isLoged" class="utilBar">
      <button v-on:click="logout()">Logout</button>
    </div>
    <div v-else>
      <router-link to="/login"><button class="utilBar">Login</button></router-link>
    </div>
    <div>
        <div class="sidebar">
            <sidebar/>
        </div>
        <div class="liste">
            <liste/>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/sidebar.vue';
import Liste from '@/components/liste.vue';
import { mapGetters, mapActions} from "vuex";

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