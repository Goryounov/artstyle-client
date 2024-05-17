<template>
  <div class="page">
    <nav-bar v-if="$auth.loggedIn"/>
    <div class="info">
      <div class="banner">
        <div class="banner__container">
          <p class="banner__title">ArtStyle</p>
          <p class="banner__desc">
            Веб-приложение ArtStyle, поможет вам при помощи
            машинного обучения определить стиль изобразительного
            искусства по картине. Исследуйте мир живописи с нами!
          </p>
        </div>

        <div class="content">
          <Nuxt/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  name: 'banner',
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

.info {
  display: flex;
  height: 100vh;
}

.banner {
  display: flex;
  flex: 1;
  justify-content: space-around;

  &__container {
    display: flex;
    max-width: 50%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
  }

  &__title {
    font-size: 72px;
  }
}

.content {
  display: flex;
  align-items: center;
}
</style>
