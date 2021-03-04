<template>
    <div>
        <sidebar></sidebar>
        <liste>
    </div>
</template>

<script>
import Sidebar from '../components/sidebar.vue';
import { mapGetters} from "vuex";
import Liste from '../components/liste.vue';

export default {
    components: { 
        Sidebar,
        Liste
    },
    computed: {
        ...mapGetters("todolist", ["listes"])
    },


}
</script>