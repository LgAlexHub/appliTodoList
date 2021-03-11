<template>
  <div>
    <div>
      <label for="filtre">Filtre : </label>
      <select name="filtre" id="filtre" v-model="filter">
        <option value="all">Tout</option>
        <option value="completed">Terminé</option>
        <option value="not_completed">Non terminé</option>    
      </select>
    </div>
    <form>
      <input v-model="todoText" type="text"/>
      <button @click="new_Todo(todoText)">Add todo</button><br>
    </form>
    <div class="list">
      <ul>
        <li v-for="todo in filtrer(id)" v-bind:key="todo.id">
          {{ todo.title }}
          <input type="checkbox" v-model="todo.completed">
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
  methods:{
      ...mapActions("todolist", ['new_Todo', 'supp_Todo']),
  },
  computed: {
    ...mapGetters("todolist", ["getListe", "filtrer"]),

    liste() {
      return this.getListe();
    }
  }
}
</script>

<style>

</style>
