<template>
    <div>
        <sidebar/>
        <liste/>
    </div>
</template>

<script>
import Sidebar from '@/components/sidebar.vue';
import Liste from '@/components/liste.vue';

export default {
    components: { 
        Sidebar,
        Liste
    }

}
</script>