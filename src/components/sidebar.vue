<template>
    <div>
        <div>
            <input v-model="listeText" type="text"/>
            <button @click="newListe(listeText)">Add todo</button><br>
        </div>
        
        <div class="list">
            <ul>
                <li v-for="liste in getAllListes" v-bind:key="liste.id" class="item">
                    <button class="waves-effect waves-light btn" @click="setCurrentList(liste.id)">{{ liste.name }} ({{ getTodosRemains(liste) }})</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            listeText: "",
        }
    },
    computed: {
        ...mapGetters("todolist", ["getAllListes"]),
        ...mapGetters("account", ["isLoged","getToken"])
    },
    methods: {
        ...mapActions("todolist", ['newListe', 'setCurrentList','getListe_API']),

        getTodosRemains(liste) {
            if (liste.todos != null)
                return liste.todos.filter(todo => !todo.completed).length
            else return 0;
        },
    },

    mounted(){
        if(this.isLoged){
            this.getListe_API({auth_token: this.getToken})
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