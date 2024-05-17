<template>
  <div>
    <h1 class="title is-2 has-text-white">History</h1>
    Задачи: {{ tasks }}
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
      console.log('A', this.$auth)
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
