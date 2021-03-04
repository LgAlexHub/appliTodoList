<template>
    <div>
        <ul>
            <li v-for="liste in listes" v-bind:key="liste.id">
                <button>{{ liste.nom }}</button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    computed: {
        ...mapGetters("todolist", ["listes"])
    },
}
</script>