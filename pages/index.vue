<template>
  <section class="art_images">
    <div class="container">
      <h2 class="art_title">ArtStyle</h2>
      <p class="art_desc">Загрузи изображение картин, без посторонних объектов</p>
      <div class="images_block">
        <div v-if="images.length === 0" class="empty_message">
          Нажмите на кнопку загрузить изображения
        </div>
        <div v-else class="images_grid">
          <div v-for="(image, index) in images" :key="index" class="image_item">
            <div class="img" :class="{ loading: image.loading }">
              <img :src="image.url" alt=""/>
              <img
                v-if="!image.loading"
                :src="require('@/assets/images/close_icon.svg')"
                alt="close_icon"
                class="close"
                @click="removeImage(index)"
              />
              <div v-if="image.loading" class="loader_icon">
                <img :src="require('@/assets/images/loading_icon.svg')" alt="loading_icon"/>
                <p>Загрузка...</p>
              </div>
            </div>
            <p class="img_name">{{ image.name }}</p>
            <p class="img_size">{{ image.size }} мб</p>
          </div>
        </div>
      </div>
      <div class="image_buttons">
        <button class="add_image" @click="uploadImages">Добавить картины</button>
        <button
          class="know_style"
          :class="{ disabled: !allImagesLoaded }"
          @click="goToStylePage"
          :disabled="!allImagesLoaded"
        >
          Узнать стиль
        </button>
      </div>
    </div>
    <input type="file" ref="fileInput" multiple @change="handleFileUpload" style="display: none"/>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [],
    }
  },

  computed: {
    allImagesLoaded() {
      return this.images.length > 0 && this.images.every(image => !image.loading)
    }
  },

  methods: {
    uploadImages() {
      this.$refs.fileInput.click()
    },

    handleFileUpload(event) {
      const files = event.target.files

      Array.from(files).forEach(file => {
        const reader = new FileReader();
        const image = {
          name: file.name,
          size: (file.size / (1024 * 1024)).toFixed(2),
          url: '',
          loading: true,
          file
        }

        this.images.push(image);
        reader.onload = e => {
          image.url = e.target.result
          image.loading = false
        }

        reader.readAsDataURL(file)
      })
    },

    removeImage(index) {
      this.images.splice(index, 1)
    },

    async goToStylePage() {
      if (this.allImagesLoaded) {
        // отправка изображений на сервер
        const formData = new FormData()
        this.images.forEach(image => {
          formData.append('Images', image.file)
        });

        try {
          const res = await this.$axios.post('tasks', formData)
        } catch (err) {
          console.log(err)
        }

        this.$router.push('/result')
      }
    }
  }
}
</script>

<style scoped>

.art_images {
  margin-bottom: 30px;
}

.art_title {
  color: #f5a74b;
  font-size: 128px;
  text-align: center;
}

.art_desc {
  color: #fff;
  font-size: 36px;
  margin-bottom: 25px;
  text-align: center;
}

.images_block {
  display: flex;
  align-items: flex-start;
  border-radius: 5px;
  background: #e9e8e8;
  padding: 20px 78px 30px 73px;
  margin-bottom: 55px;
  max-width: 1275px;
  margin: 0 auto 55px auto;
  min-height: 250px;
  max-height: 450px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #aaa #e9e8e8;

}

.empty_message {
  color: #000;
  font-size: 32px;
  text-align: center;
  width: 100%;
  margin-bottom: auto;
  margin-top: auto;
}

.images_grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.image_item {
  flex: 0 1 calc(20% - 20px);
  box-sizing: border-box;
}

.img_name, .img_size {
  color: #000;
  font-size: 20px;
  width: 250px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
}

.img {
  position: relative;
  width: 250px;
  height: 150px;
  border-radius: 5px;
  overflow: hidden;
}

.img > img:first-child {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.close {
  position: absolute;
  top: 6px;
  right: 9px;
  z-index: 4;
  cursor: pointer;
}

.loading {
  position: relative;
}

.loading::after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(42, 42, 42, 0.62);
}

.loader_icon {
  display: block;
  position: absolute;
  bottom: 28px;
  left: 0px;
  right: 0;
  z-index: 4;
  text-align: center;
}

.loader_icon p {
  color: #fff;
  font-size: 20px;
}

.image_buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 47px;
}

.add_image {
  padding: 16px 33px;
  color: #fff;
  font-family: "Tinos";
  font-size: 36px;
  border-radius: 5px;
  background: #793c3c;
  text-decoration: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.add_image:hover {
  background-color: #853f3f;
}

.add_image:active {
  background-color: #683535;
}

.know_style {
  padding: 16px 76px;
  color: #fff;
  font-family: "Tinos";
  font-size: 36px;
  border-radius: 5px;
  background: #d3a064;
  text-decoration: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.know_style:hover {
  background: #daa263;
}

.know_style:active {
  background: #c9965c;
}

.know_style.disabled {
  background: #b0b0b0;
  cursor: not-allowed;
}
</style>
