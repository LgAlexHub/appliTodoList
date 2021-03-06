<template>
  <div>
    <input v-model="todoText" type="text"/>
    <button @click="new_Todo(todoText)">Add todo</button><br>
    <label for="filtre">Filtre : </label>
    <select name="filtre" id="filtre" v-model="filter">
      <option value="all">Tout</option>
      <option value="checked">Terminé</option>
      <option value="not_checked">Non terminé</option>    
    </select>

    <ul>
      <li v-for="todo in allTodos" v-bind:key="todo.id">
        {{ todo.title }}
        <input type="checkbox" v-model="todo.checked">
        <button @click="modif()">Modif</button>
        <button @click="suppr()">Suppr</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters} from "vuex";

export default {
  data(){
    return {
      todoText: ""
    }
  },
  props: {
    id: {type: String, default: "1"}
  },
  computed: {
    ...mapGetters("todolist", ["getListe", "allTodos"]),
    ...mapActions("todolist", ['new_Todo']),

    filtrer() {
      let res;
      if(this.filter == "all") {
        res = this.todos;
      } else if(this.filter == "checked") {
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
