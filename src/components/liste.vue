<template>
  <div v-if="current_list==null">
    <h4>Veuillez sélectionner une TodoList à afficher</h4>
  </div>
  <div v-if="liste!=null">
    <h1>{{ liste.name }}</h1>
    <button class="waves-effect waves-light red btn-small" @click="suppTodoList({id:current_list, auth_token: this.getToken})">Supprimer</button>
    <div>
      <label for="filtre">Filtre : </label>
      <select name="filtre" id="filtre" v-model="filter">
        <option value="all">Tout</option>
        <option value="completed">Terminé</option>
        <option value="not_completed">Non terminé</option>    
      </select>
    </div>
    <br>
    <form @submit.prevent="new_Todo({name:todoText, completed:0, todolist_id:current_list, auth_token: this.getToken})">
      <input v-model="todoText" type="text"/>
      <input class="waves-effect waves-light btn-small" type="submit" value="Ajouter une Tâche">
    </form>
    <div class="list">
      <ul>
        <li v-for="(todo, index) in filtrer" v-bind:key="todo.id" class="item">
          <label>
            <input type="checkbox" id="check" v-model="todo.completed">
            <span>{{ todo.name }}</span>
          </label>
          <div>
            <div v-if="editing">
              <div v-if=todo.completed>
              <p style="text-decoration:line-through;">{{ todo.name }}</p>
              </div>
              <div v-else>
                {{ todo.name }}
              </div>
          
              <br>
              <button class="waves-effect waves-light btn-small" @click="modifyTodo({id:todo.id, name:todo.name, completed:todo.completed, todolist_id:current_list, auth_token: this.getToken})">Modifier</button>
            </div>
            <div v-else>
              <input type="text" v-model="todo.name"><br>
              <button class="waves-effect waves-light btn-small" @click="modifyTodo({id:todo.id, name:todo.name, completed:todo.completed, todolist_id:current_list, auth_token: this.getToken})">Enregistrer</button>
            </div>
            <br>
            <button class="waves-effect waves-light red btn-small" @click="supp_Todo({todo: todo, index:index, auth_token:this.getToken})">Supprimer</button>
          </div>
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
      editing: 'false'
    }
  },
  methods:{
      ...mapActions("todolist", ['new_Todo', 'supp_Todo', 'modify_todo','suppTodoList']),

    modifyTodo(todo) {
      console.log("Modify todo : "+todo.id)
      this.editing = this.editing == true ? false : true;
      this.modify_todo(todo);
    },
  },
  computed: {
    ...mapGetters("todolist", ["getListe", "filtrer","getCurrentTodoList"]),
    ...mapGetters("account", ["isLoged","getToken"]),

    liste() {
      return this.getListe;
    },

    current_list(){
      return this.getCurrentTodoList;
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
