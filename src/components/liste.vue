<template>
  <div v-if="liste!=null">
    <h1>{{ liste.title }}</h1>
    <div>
      <label for="filtre">Filtre : </label>
      <select name="filtre" id="filtre" v-model="filter">
        <option value="all">Tout</option>
        <option value="completed">Terminé</option>
        <option value="not_completed">Non terminé</option>    
      </select>
    </div>
    <br>
    <form @submit.prevent="new_Todo(todoText)">
      <input v-model="todoText" type="text"/>
      <input class="waves-effect waves-light btn-small" type="submit" value="Add todo">
    </form>
    <div class="list">
      <ul>
        <li v-for="(todo,index) in filtrer" v-bind:key="todo.id" class="item">
          <b>{{ todo.title }}</b>
          <input type="checkbox" v-model="todo.completed">&nbsp;
          <button class="waves-effect waves-light btn-small" @click="modif()">Modifier</button>&nbsp;
          <button class="waves-effect waves-light btn-small" @click="supp_Todo(index)">Supprimer</button>
        </li>
        <div v-if="nbTache == null | nbTache == 0 | nbTache == 1">
          <p><strong>{{nbTache}}</strong> tâche à faire</p>
        </div>
        <div v-else>
          <p><strong>{{nbTache}}</strong> tâches à faire</p>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters} from "vuex";

export default {
  data(){
    return {
      todoText: "",
      filter: 'all',
    }
  },
  methods:{
      ...mapActions("todolist", ['new_Todo', 'supp_Todo']),
  },
  computed: {
    ...mapGetters("todolist", ["getListe", "filtrer"]),

    liste() {
      return this.getListe;
    },

    nbTache() {
      if (this.getListe.todos != null)
        return this.getListe.todos.filter(todo => !todo.completed).length
      else return 0;
    },

    filtrer() {
      let res;
      let todos = this.getListe.todos;
      if(this.filter == "all") {
        res = todos;
      } else if(this.filter == "completed") {
        res = [];
        todos.forEach(element => {
          if(element.completed) {
            res.push(element);
          }
        });
      } else if(this.filter == "not_completed") {
        res = [];
        todos.forEach(element => {
          if(!element.completed) {
            res.push(element);
          }
        });
      }
      return res;
    }
  }
}
</script>

<style>
.item:not(first-child) {
    margin-top: 10px;
    border-top: 1px solid black;
    padding-top: 10px;
}
</style>
