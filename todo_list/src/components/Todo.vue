<template>
    <div>
        {{ name }}
        <input type="checkbox" v-model="completed">
        <button @click="modif()">Modif</button>
        <button @click="suppr()">Suppr</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: 1,
            name : 'tache 1',
            completed : false
        }
    },
    methods: {
        suppr() {
        
        }
    }
}
</script>