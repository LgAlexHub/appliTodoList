<template>
  <div id="App">
    <router-view></router-view>
  </div>
</template>

<script>
import M from 'materialize-css'
export default {
  name: 'App',
  mounted () {
    M.AutoInit()
  }
}
</script>