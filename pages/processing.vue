<template>
  <section class="art_images">
    <div class="container">
      <h2 class="art_title">ArtStyle</h2>
      <p class="art_desc">Идет обработка изображений</p>
      <div class="images_block">
        <div class="tasks">
          <task 
            v-for="task in tasks" 
            :key="task.id" 
            :task="task"
            @remove="removeTask(task.id)"
          />
        </div>
      </div>        
    </div>  
    <div class="button_back">
      <button class="back" @click="goBack">Назад</button>
    </div>
  </section>
</template>

<script>
import Task from '~/components/Task.vue'

export default {
  components: {
    Task
  },
  data() {
    return {
      tasks: []
    }
  },
  async mounted() {
    try {
      this.tasks = (await this.$axios.get('tasks')).data
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
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
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.art_desc {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.72px;
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

.result_block {
  margin-bottom: 30px;
}

.result_top {
  padding: 30px 0 0 0;
  color: #efe9e2;
}

.result_title {
  font-size: 64px;
  font-weight: 400;
  padding: 0 0 10px 0;
}

.result_text {
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 60px;
}

.processing_title {
  font-size: 36px;
  color: #d3a064;
  font-weight: 400;
  padding: 20px 0 20px 0;
}

.tasks {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  color: black;
}

.button_back {
  display: flex;
  justify-content: center;
}

.back {
  padding: 16px 33px;
  color: #fff;
  font-family: "Tinos";
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 5px;
  background: #793c3c;
  text-decoration: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.back:hover {
  background-color: #853f3f;
}

.back:active {
  background-color: #683535;
}

</style>



