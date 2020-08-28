import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import firebase from 'firebase'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { // con puedo poner la Info que quiera
      login: true // loggin necesita autenticacion
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => { // funcion que se ve a realizar cada vez que se requiera autenticacion
let user = firebase.auth().currentUser
let authRequired = to.matched.some(route => route.meta.login) // pregunta si tiene el meta login true 
if (!user && authRequired){
  next('/')
} else {
  next()
}
  // to and from are both route objects. must call `next`.
})
export default router
