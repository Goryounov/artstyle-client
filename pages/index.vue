<template>
  <div>
    <h1 class="title is-2 has-text-white">History</h1>
    <h2 class="title is-3 has-text-white">Tasks</h2>
    <div class="tasks">
      <task v-for="task in tasks" :task="task"></task>
    </div>
    <br/>
    Пользователь: {{ userInfo }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: []
    }
  },

  computed: {
    userInfo() {
      const { firstName, lastName, email } = this.$auth.user
      return {
        firstName,
        lastName,
        email
      }
    }
  },

  async mounted() {
    try {
      this.tasks = (await this.$axios.get('tasks')).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style lang="scss" scoped>
.tasks {
  display: flex;
  gap: 10px
}
</style>
