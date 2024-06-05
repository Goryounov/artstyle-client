const state = () => ({
  classes: [],
})

const getters = {
  classByCLassId: state => classId => {
    return state.classes.find(item => item.classId === classId)
  }
}

const mutations = {
  SET_CLASSES(state, classes) {
    state.classes = classes
  }
}

const actions = {
  async getClasses({ commit }) {
    const classes = (await this.$axios.get('classes')).data
    commit('SET_CLASSES', classes)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
