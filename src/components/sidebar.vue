<template>
    <div>
        <div>
            <input v-model="listeText" type="text"/>
            <button class="waves-effect waves-light btn" @click="newListe(listeText)">Add todo</button><br>
        </div>
        
        <div class="list">
            <ul>
                <li v-for="liste in getAllListes" v-bind:key="liste.id" class="item">
                    <button class="waves-effect waves-light btn" @click="setCurrentList(liste.id)">{{ liste.title }}</button>
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
        ...mapGetters("account",["isLoged"]),
        ...mapGetters("todolist", ["getAllListes"]),
    },
    methods: {
        ...mapActions("todolist", ['newListe', 'setCurrentList']),
    },
}
</script>