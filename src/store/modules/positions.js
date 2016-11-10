import positionAPI from '../../api/position'
import * as types from '../mutation-types'

// Initial state
const state = {
  all: []
}

const actions = {
  getAllPositions ({ commit }) {
    positionAPI.getPositions(positions => {
      commit(types.RECEIVE_POSITIONS, { positions })
    })
  }
}

const mutations = {
  [types.RECEIVE_POSITIONS] (state, { positions }) {
    state.all = positions
  }
}

const getters = {
  allPositions: state => state.all
}

export default {
  state,
  mutations,
  getters,
  actions
}
