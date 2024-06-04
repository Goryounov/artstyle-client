<template>
  <div class="result_block">
    <div class="result_top">
      <h1 class="result_title">История</h1>
      <p class="result_text">
        Здесь вы можете видеть все готовые результаты обработок картинок, в том числе предыдущие
      </p>
    </div>
    <div class="tasks">
      <task 
        v-for="task in tasks" 
        :key="task.id" 
        :task="task" 
        @remove="removeTask(task.id)"
      />
    </div>
  </div>
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
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
  }
}
</script>

<style scoped>
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

.tasks {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  color: white;
}
</style>


