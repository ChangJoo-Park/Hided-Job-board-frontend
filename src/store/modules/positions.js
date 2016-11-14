import positionAPI from '../../api/position'
import * as types from '../mutation-types'
import Vue from 'vue'

// Initial state
const state = {
  all: []
}

const actions = {
  getAllPositions ({ commit }) {
    Vue.http.get('http://localhost:3000/positions').then((response) => {
      const positions = response.body
      commit(types.RECEIVE_POSITIONS, { positions })
    })
  },
  getPosition ({ commit }) {
    positionAPI.getOne(position => {
      commit(types.RECEIVE_POSITION, { position })
    })
  },
  createPosition ({ commit }, newPosition) {
    console.log('[Create Action] create position')
    console.log(newPosition)
    Vue.http.post('http://localhost:3000/positions', {
      'title': newPosition.title,
      'salary': newPosition.salary,
      'description': newPosition.description,
      'type': newPosition.type,
      'category': newPosition.category,
      'company': {
        'name': newPosition.company.name,
        'location': newPosition.company.location,
        'email': newPosition.company.email,
        'website': newPosition.company.website
      },
      'createdAt': new Date()
    }).then((response) => {
      console.log('success')
      console.log(response)
      const position = response.body
      console.log(position)
      commit(types.CREATE_POSITION, {position})
    })
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
  [types.CREATE_POSITION] (state, { position }) {
    console.log('Mutation with CREATE')
    console.log(position)
    state.all.push(position)
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
