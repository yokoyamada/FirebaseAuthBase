// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app
const config = {
  apiKey: 'AIzaSyAqeJO7kYhKHEU6kgXNsaAij6L6gx0zwxc',
  authDomain: 'myfirst-d06bc.firebaseapp.com',
  databaseURL: 'https://myfirst-d06bc.firebaseio.com',
  projectId: 'myfirst-d06bc',
  storageBucket: 'myfirst-d06bc.appspot.com',
  messagingSenderId: '321177918677'
}
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
