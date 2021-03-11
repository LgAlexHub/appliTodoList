<template>
    <div>
        <div class="sidebar">
            <sidebar/>
        </div>
        <div class="liste">
            <liste/>
        </div>
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

<style>
.sidebar {
  height: 100%;
  width: 11vw;
  padding: 2vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: lightgray;
  overflow-x: scroll;
  padding-top: 2vh;
}

.liste {
  margin-left: 15vw;
  padding: 0px 10px;
}

</style>