import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Notes from '../views/Notes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props: true
  },
  {
    path: '/notes',
    name: 'Notes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Notes
        //() => import(/* webpackChunkName: "about" */ '../views/Notes.vue')
  }
  // ,
  // {
  //   path: '/calendar',
  //   name: 'Calendar',
  //   component: Calendar
  // }
]

const router = new VueRouter({
  routes
})

export default router
