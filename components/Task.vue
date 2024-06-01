<template>
  <div class="task">
    <b-image
      :src="task.imageUrl"
      alt="image"
      ratio="601by235"/>
    Status: {{ task.status }}
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.task {
  max-width: 300px;
}
</style>
