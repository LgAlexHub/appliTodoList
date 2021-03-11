<template>
    <div>
        <div class="list">
            <ul>
                <li v-for="liste in listes" v-bind:key="liste.id" class="item">
                    <button @click="setCurrentList(liste.id)">{{ liste.nom }}</button>
                </li>
            </ul>
        </div>
        <div>
            <input v-model="listeText" type="text"/>
            <button @click="newListe(listeText)">Add todo</button><br>
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
        ...mapGetters("todolist", ["listes"])
    },
    methods: {
      ...mapActions("todolist", ['newListe', 'setCurrentList']),
    },
}
</script>

<style>
.item:not(first-child) {
    margin-top: 10px;
    border-top: 1px solid black;
    padding-top: 10px;
}

</style>