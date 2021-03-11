<template>
    <div>
        <sidebar/>
        <liste/>
    </div>
</template>

<script>
import Sidebar from '@/components/sidebar.vue';
import Liste from '@/components/liste.vue';
import * as api from '../api/index.js';

export default {
    components: { 
        Sidebar,
        Liste
    },
    mounted(){
       (async function () {
            await api.login('21801364@etu.unicaen.fr','thomasLePluBo')
            console.log(api.authToken)
        }());
    }

}
</script>