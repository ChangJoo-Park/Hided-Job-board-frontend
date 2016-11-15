
import * as types from '../mutation-types'
import Vue from 'vue'

// Initial state
const state = {
  all: [],
  currentPage: 1,
  loadCompleted: false
}

const actions = {
  getAllPositions ({ commit }) {
    Vue.http.get('http://localhost:3000/positions?_sort=updatedAt&_order=DESC').then((response) => {
      const positions = response.body
      commit(types.RECEIVE_POSITIONS, { positions })
    })
  },
  getInitialPositions ({ commit }) {
    Vue.http.get('http://localhost:3000/positions?_sort=updatedAt&_order=DESC&_limit=10&_page=1').then((response) => {
      const positions = response.body
      commit(types.RECEIVE_POSITIONS, { positions })
    })
  },
  getNextPositions ({ commit }) {
    const nextPage = state.currentPage + 1
    Vue.http.get(`http://localhost:3000/positions?_sort=updatedAt&_order=DESC&_limit=10&_page=${nextPage}`).then((response) => {
      const positions = response.body
      console.log(positions)
      if (positions.length === 0) {
        state.loadCompleted = true
        return
      }
      commit(types.NEXT_POSITION, { positions })
      state.currentPage = nextPage
    })
  },
  getPosition ({ commit }) {
  },
  createPosition ({ commit }, newPosition) {
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
      'updatedAt': newPosition.createdAt || new Date(),
      'createdAt': newPosition.createdAt || new Date()
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
    Vue.http.delete(`http://localhost:3000/positions/${position.id}`)
    .then((response) => {
      commit(types.DELETE_POSITION, { position })
    })
  },
  updatePosition ({ commit }, position) {
    console.log('[Update Position] Call to API')
    Vue.http.put(`http://localhost:3000/positions/${position.id}`, {
      'title': position.title,
      'salary': position.salary,
      'description': position.description,
      'type': position.type,
      'category': position.category,
      'company': {
        'name': position.company.name,
        'location': position.company.location,
        'email': position.company.email,
        'website': position.company.website
      },
      'updatedAt': new Date()
    }).then((response) => {
      console.log('success')
      console.log(response)
      const position = response.body
      console.log(position)
      commit(types.UPDATE_POSITION, {position})
    })
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
  [types.DELETE_POSITION] (state, { position }) {
    console.log('Mutation with DELETE')
    const index = state.all.indexOf(position)
    state.all.splice(index, 1)
  },
  [types.UPDATE_POSITION] (state, { positions }) {
    console.log('Mutation with UPDATE')
  },
  [types.NEXT_POSITION] (state, { positions }) {
    for (let i = 0; i < positions.length; i++) {
      state.all.push(positions[i])
    }
  }
}

const getters = {
  allPositions: state => state.all,
  loadCompleted: state => state.loadCompleted
}

export default {
  state,
  mutations,
  getters,
  actions
}
