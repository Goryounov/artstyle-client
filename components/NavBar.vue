<template>
  <div class="navbar">
    <div class="navbar__block">
    <div class="navbar__logo">
      <nuxt-link
        to="/"
        class="navbar__link">
        <img :src="require('@/assets/images/logo.png')" alt="logo">
      </nuxt-link>
    </div>

    <div class="navbar__menu">
      <nuxt-link
        to="/"
        class="navbar__link">
        Приложение
      </nuxt-link>

      <nuxt-link
        to="/result"
        class="navbar__link">
        История
      </nuxt-link>

      <nuxt-link
        to="/about"
        class="navbar__link">
        О приложении
      </nuxt-link>
      <nuxt-link
        to="/api"
        class="navbar__link">
        API
      </nuxt-link>
      <div
        class="navbar__link"
        @click="logout">
        Выйти
      </div>
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
  align-items: center;
  background-color: black;
  padding: 10px 40px;
  border-bottom: 1px solid #fff;

  &__block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .navbar__logo img {
    height: 50px;
  }

  .navbar__menu {
    display: flex;
    align-items: center;
    gap: 65px;
    list-style: none;
  }

  &__link {
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.2s ease-in;

    &.active,
    &:hover {
      color: #f5a74b;
    }
  }
}
</style>
