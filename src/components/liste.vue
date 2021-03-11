<template>
  <div>
    <div>
      <label for="filtre">Filtre : </label>
      <select name="filtre" id="filtre" v-model="filter">
        <option value="all">Tout</option>
        <option value="checked">Terminé</option>
        <option value="not_checked">Non terminé</option>    
      </select>
    </div>
    <div>
      <input v-model="todoText" type="text"/>
      <button @click="new_Todo(todoText)">Add todo</button><br>
    </div>
    <div class="list">
      <ul>
        <li v-for="todo in allTodos" v-bind:key="todo.id">
          {{ todo.title }}
          <input type="checkbox" v-model="todo.checked">
          <button @click="modif()">Modifier</button>
          <button @click="supp_Todo(todo.id)">Supprimer</button>
        </li>
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
    }
  },

  props: {
    id: {type: String, default: "1"}
  },
  methods:{
      ...mapActions("todolist", ['new_Todo', 'supp_Todo']),
  },
  computed: {
    ...mapGetters("todolist", ["getListe", "allTodos"]),

    filtrer() {
      let res;
      if(this.filter == "all") {
        res = this.todos;
      } else if(this.filter == "checked ") {
        res = [];
        this.todos.forEach(element => {
          if(element.completed) {
            res.push(element);
          }
        });
      } else if(this.filter == "not_checked") {
        res = [];
        this.todos.forEach(element => {
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

</style>
