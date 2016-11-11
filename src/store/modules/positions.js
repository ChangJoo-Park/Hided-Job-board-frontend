import positionAPI from '../../api/position'
import * as types from '../mutation-types'

// Initial state
const state = {
  all: []
}

const actions = {
  getAllPositions ({ commit }) {
    positionAPI.getAll(positions => {
      commit(types.RECEIVE_POSITIONS, { positions })
    })
  },
  getPosition ({ commit }) {
    positionAPI.getOne(position => {
      commit(types.RECEIVE_POSITION, { position })
    })
  },
  createPosition ({ commit }, position) {
    console.log('[Create Action] create position')
    positionAPI.create(
      position,
      (position) => commit(types.CREATE_POSITION, { position })
    )
  },
  deletePosition ({ commit }, position) {
    console.log('Call Remove Position to API')
    positionAPI.delete(
      position,
      (position) => commit(types.DELETE_POSITION, { position })
    )
  },
  updatePosition ({ commit }, position) {
    console.log('[Update Position] Call to API')
    positionAPI.update(
      position,
      (position) => commit(types.UPDATE_POSITION, { position })
    )
  }
}

const mutations = {
  [types.RECEIVE_POSITIONS] (state, { positions }) {
    state.all = positions
  },
  [types.CREATE_POSITION] (state, { positions }) {
    console.log('Mutation with CREATE')
    // state.all = positions
  },
  [types.DELETE_POSITION] (state, { positions }) {
    console.log('Mutation with DELETE')
    // state.all = positions
  },
  [types.UPDATE_POSITION] (state, { positions }) {
    console.log('Mutation with UPDATE')
    // state.all = positions
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
