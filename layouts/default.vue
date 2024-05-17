<template>
  <div class="page">
    <nav-bar v-if="$auth.loggedIn"/>
    <div class="container">
      <Nuxt/>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  name: 'default',
  components: { NavBar }
}
</script>

<style lang="scss">
html {
  background: #000000;
  color: #FFFFFF;
}

body {
  color: #FFFFFF;
}

.page {
  background: #000000;
}
</style>
