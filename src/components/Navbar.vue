<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <div id="navbarNav" class="ml-auto">
    <ul class="navbar-nav">
      <li class="nav-item active">
       <b><router-link class="nav-link" to="/">Home</router-link></b> 
      </li>
      <li class="nav-item">
         <router-link class="nav-link" to="/admin">Admin</router-link>
      </li>
      <li class= "nav-item" v-if="currentUser">
        <a href="#" @click.prevent="logout" class="nav-link">Logout</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import firebase from 'firebase'
export default {
name: 'Navbar',
methods: {
  ...mapActions([ 'setUser']),
  logout() {
    firebase.auth().signOut().then(() => {
      this.$router.push('/')
      this.setUser(undefined)
      })
    }
     },
    computed: {
    ...mapState([ 'currentUser'])
    }
}
</script>

<style>

</style>