<template>
  <div class="navbar">
    <div class="navbar__logo">
      <nuxt-link
        to="/"
        class="navbar__link">
        ArtStyle
      </nuxt-link>
    </div>

    <div class="navbar__menu">
      <nuxt-link
        to="/"
        class="navbar__link">
        History
      </nuxt-link>
      <nuxt-link
        to="/about"
        class="navbar__link">
        About
      </nuxt-link>
      <nuxt-link
        to="/account"
        class="navbar__link">
        Account
      </nuxt-link>
      <div
        class="navbar__link"
        @click="logout">
        Logout
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.replace('/signin')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000000;
  color: #FFFFFF;

  &__link {
    color: #FFFFFF;
    padding: 10px;
    display: inline-block;
    cursor: pointer;
  }
}
</style>
