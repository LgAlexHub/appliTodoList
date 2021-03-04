<template>
  <label for="filtre">Filtre : </label>
  <select name="filtre" id="filtre" v-model="filter">
    <option value="all">Tout</option>
    <option value="checked">Terminé</option>
    <option value="not_checked">Non terminé</option>    
  </select>

  <ul>
    <li v-for="(todo, index) in filtrer" v-bind:key="todo.id">
      <label :for="todo.id">{{ todo.name }}</label>
      <input type="checkbox" :id="todo.id" v-model="todo.completed">
      <button @click="suppr(index)">Suppr</button>
    </li>
  </ul>
</template>

<script>

export default {
  data() {
    return {
      todos: [
      {
        id: 1,
        name : 'tache 1',
        completed : false
      },
      {
        id: 2,
        name : 'tache 2',
        completed: true
      }
      ],
      newTodo: '',
      filter: 'all',
    }
  },
  methods: {
    suppr(index) {
      this.todos.splice(index, 1);
    }
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
