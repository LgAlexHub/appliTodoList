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
      <input type="submit" value="Add todo">
    </form>
    <div class="list">
      <ul>
        <li v-for="(todo,index) in filtrer" v-bind:key="todo.id" class="item">
          <b>{{ todo.title }}</b>
          <input type="checkbox" v-model="todo.completed">
          <button @click="modif()">Modifier</button>
          <button @click="supp_Todo(index)">Supprimer</button>
        </li>
        <div v-if="getTodosRemains(getCurrentListe) == null | getTodosRemains(getCurrentListe) == 0 | getTodosRemains(getCurrentListe) == 1">
          <p><strong>{{getTodosRemains(getCurrentListe)}}</strong> tâche à faire</p>
        </div>
        <div v-else>
          <p><strong>{{getTodosRemains(getCurrentListe)}}</strong> tâches à faire</p>
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
    ...mapGetters("todolist", ["getListe", "filtrer","getTodosRemains","getCurrentListe"]),

    liste() {
      return this.getListe;
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
