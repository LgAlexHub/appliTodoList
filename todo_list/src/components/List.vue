<template>
  <div>
    <label for="filtre">Filtre : </label>
    <select name="filtre" id="filtre" v-model="filter">
      <option value="all">Tout</option>
      <option value="checked">Terminé</option>
      <option value="not_checked">Non terminé</option>    
    </select>

    <ul>
      <li>
        <todo></todo>
      </li>
    </ul>
  </div>
</template>

<script>
import Todo from './Todo.vue'

export default {
  data() {
    return {
      id: 1,
      nom: 'liste 1'
    }
  },
  components: {
    Todo
  },
  computed: {
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
