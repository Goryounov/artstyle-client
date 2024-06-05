import Vue from 'vue'

const state = () => ({
  tasks: [],
})

const getters = {
  templateById: state => id => {
    return state.templates.find(t => t.id === id)
  }
}

const mutations = {
  ADD_TASKS(state, tasks) {
    state.tasks.push(...tasks)
  },

  UPDATE_TASK(state, taskData) {
    const task = state.tasks.find(item => item.id === taskData.taskId)
    if (!task) return

    if (task.status) Vue.set(task, 'status', taskData.status)
    if (task.classId) Vue.set(task, 'classId', taskData.classId)
  }
}

const actions = {
  async getTasks({ commit }) {
    const tasks = (await this.$axios.get('tasks')).data
    commit('ADD_TASKS', tasks)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
