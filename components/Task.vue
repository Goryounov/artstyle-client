<template>
  <div class="task">
    <div class="img-container">
      <img :src="task.imageUrl" alt="image" />
      <img
        src="@/assets/images/close_icon.svg"
        alt="close_icon"
        class="close"
        @click="$emit('remove', task.id)"
      />
    </div>
    <p class="img-name">{{ task.name }}</p>
    <p class="img-status">Статус: {{ task.status }}</p>
    <p class="img-status">Класс: {{ task.classId }}</p>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: {
      type: Object,
      required: true
    },
  },
};
</script>

<style scoped>
.task {
  width: 250px;
  text-align: left;
  margin-bottom: 20px;
}

.img-container {
  position: relative;
  width: 100%;
  padding-bottom: 66.67%;
  overflow: hidden;
  border-radius: 5px;
  margin-bottom: 10px;
}

.img-container img:first-child {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.img-name,
.img-status {
  margin-top: 10px;
  font-size: 26px;
}
</style>
