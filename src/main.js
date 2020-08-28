import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import firebaseConfig from '../config/firebase'

firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false

let app  
firebase.auth().onAuthStateChanged(() => { // cuando el usuario haga refresh no se borra la sesión de usuario
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
    
  }
})

