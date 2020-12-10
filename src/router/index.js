import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import Perfil from '../views/Perfil.vue'
import Entrevistas from '../views/Entrevistas.vue'
import AprovarPropostas from '../views/AprovarPropostas.vue'
import CriarProposta from '../views/CriarProposta.vue'
import DetalhesProposta from '../views/DetalhesProposta.vue'
import EditarProposta from '../views/EditarProposta.vue'
import EditarUser from '../views/EditarUser.vue'
import LandingPage from '../views/LandingPage.vue'
import MinhasPropostas from '../views/MinhasPropostas.vue'
import Register from '../views/Register.vue'
import Forum from '../views/Forum.vue'



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
    path: '/AprovarPropostas',
    name: 'AprovarPropostas',
    component: AprovarPropostas
  },
  {
    path: '/CriarProposta',
    name: 'CriarProposta',
    component: CriarProposta
  },
  {
    path: '/DetalhesProposta',
    name: 'DetalhesProposta',
    component: DetalhesProposta
  },
  {
    path: '/EditarUser',
    name: 'EditarUser',
    component: EditarUser
  },
  {
    path: '/LandingPage',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/EditarProposta',
    name: 'EditarProposta',
    component: EditarProposta
  },
  {
    path: '/MinhasPropostas',
    name: 'MinhasPropostas',
    component: MinhasPropostas
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Forum',
    name: 'Forum',
    component: Forum
  },
]

const router = new VueRouter({
  routes
})

export default router
