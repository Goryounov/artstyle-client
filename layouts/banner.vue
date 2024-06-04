<template>
  <div class="page">
    <nav-bar v-if="$auth.loggedIn" />
    <div class="info">
      <div class="banner">
        <div class="banner__container">
          <p class="banner__title">ArtStyle</p>
          <p class="banner__desc">
            Веб-приложение ArtStyle, поможет вам при помощи
            машинного обучения определить стиль изобразительного
            искусства по картине. Исследуйте мир живописи с нами!
          </p>
          <div class="girl">
            <img :src="require('@/assets/images/girl.png')" alt="Girl" />
            <div class="circle-img">
              <img :src="require('@/assets/images/red_circle.png')" alt="Red Circle" />
            </div>
          </div>
          <div class="triangle-img">
            <img :src="require('@/assets/images/blue_triangle.png')" alt="Blue Triangle" />
          </div>
        </div>
        <div class="content">
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue';

export default {
  name: 'banner',
  components: { NavBar },
};
</script>

<style lang="scss">
html {
  background: #000;
  color: #fff;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    background-color: #000;
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(221, 202, 200, 0.33);
    width: 3px;
  }
}

body {
  color: #fff;
  font-family: 'Viaoda Libre', serif;
  font-weight: 400;
}

.page {
  background: #000;
}

.info {
  display: flex;
  align-items: center;
}

.banner {
  display: flex;
  justify-content: space-between;
  gap: 85px;
  z-index: 2;
  margin: 0 auto;

  &__container {
    display: flex;
    flex-direction: column;
    max-width: 950px;
    justify-content: center;
    position: relative;
  }

  &__title {
    color: #f5a74b;
    font-size: 156px;
    font-weight: 400;
    line-height: normal;
    position: relative;
    z-index: 22;
  }

  &__desc {
    color: #fff;
    font-size: 36px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.72px;
    position: relative;
    z-index: 23;
  }

  .girl {
    text-align: center;

    img {
      position: relative;
      z-index: 3;
    }

    .circle-img img {
      position: absolute;
      bottom: 100px;
      left: 0;
      z-index: 0;
    }
  }

  .triangle-img {
    position: absolute;
    top: 120px;
    right: 120px;
    z-index: 0;

    img {
      position: relative;
      z-index: 3;
    }
  }
}

.content {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  width: 31.5%;
}
</style>
