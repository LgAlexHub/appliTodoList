<template>
    <div>
        <ul>
            <li v-for="liste in listes" v-bind:key="liste.id">
                <button>{{ liste.nom }}</button>
            </li>
        </ul>
        <button @click="newListe()">Ajouter une liste</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters("todolist", ["listes"])
    },
    methods: {
      ...mapActions("todolist", ['newListe'])
    },
}
</script>