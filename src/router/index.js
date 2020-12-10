import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import Perfil from '../views/Perfil.vue'
import Propostas from '../views/Propostas.vue'
import Entrevistas from '../views/Entrevistas.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Perfil',
    name: 'Perfil',
    component: Perfil
  },
  {
    path: '/Entrevistas',
    name: 'Entrevistas',
    component: Entrevistas
  },
  {
    path: '/Propostas',
    name: 'Propostas',
    component: Propostas
  },
]

const router = new VueRouter({
  routes
})

export default router
