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
    path: '/sobre',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/Login',
    name: 'login',
    component: Login
  },
  {
    path: '/Perfil',
    name: 'profile',
    component: Perfil
  },
  {
    path: '/Entrevistas',
    name: 'interview',
    component: Entrevistas
  },
  {
    path: '/AprovarPropostas',
    name: 'aproveProposals',
    component: AprovarPropostas
  },
  {
    path: '/CriarProposta',
    name: 'createProposal',
    component: CriarProposta
  },
  {
    path: '/DetalhesProposta',
    name: 'proposalDetails',
    component: DetalhesProposta
  },
  {
    path: '/EditarUser',
    name: 'userEdit',
    component: EditarUser
  },
  {
    path: '/LandingPage',
    name: 'landingpage',
    component: LandingPage
  },
  {
    path: '/EditarProposta',
    name: 'editarProposta',
    component: EditarProposta
  },
  {
    path: '/MinhasPropostas',
    name: 'myProposals',
    component: MinhasPropostas
  },
  {
    path: '/registar',
    name: 'register',
    component: Register
  },
  {
    path: '/Forum',
    name: 'forum',
    component: Forum
  },
]

const router = new VueRouter({
  routes
})

export default router
