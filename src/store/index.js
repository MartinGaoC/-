import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  seller: []
}

const mutations = {
  getList (state, res) {
    state.seller = res
  }
}
const actions = {
  getList ({commit}, url) {
    axios.get(url).then((response) => {
      console.log(response.data.data)
      commit('getList', response.data.data)
    })
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
