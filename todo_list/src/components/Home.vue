<template>
    <div>
        <ul>
            <li v-for="liste in listes" v-bind:key="liste.id">
                <list :id="liste.id"></list>
            </li>
        </ul>
    </div>
</template>

<script>
import List from './List.vue'
import { mapGetters} from "vuex";
export default {
    components: { 
      List
    },
    computed: {
     ...mapGetters("todolist", ["listes"])
    },


}
</script>