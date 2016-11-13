import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import PositionList from '../components/positions/PositionList'
import ManagePositions from '../components/manage/ManagePositions'
import PostJob from '../components/post/PostJob'

const routes = [
  { path: '/', component: PositionList },
  { path: '/manage-positions', component: ManagePositions },
  { path: '/post-a-job', component: PostJob },
  { path: '*', redirect: '/' }
]

export default new Router({
  mode: 'history',
  routes
})
