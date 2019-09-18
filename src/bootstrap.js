// window.* = * -- This assigns a module for global usage
// Vue.use(*) -- This assigns plugins for Vue to use

import Vue from 'vue' // Imports vue
window.Vue = Vue
Vue.config.productionTip = true

import axios from 'axios' // Imports axios to make AJAX request
window.axios = axios

import VueRouter from 'vue-router' // Imports Router to make SPA
Vue.use(VueRouter)

import Vuex from 'vuex' // State management
import createPersistedState from 'vuex-persistedstate' // Persisted State management
Vue.use(Vuex)
window.Vuex = Vuex
window.createPersistedState = createPersistedState

import VueSweetalert2 from 'vue-sweetalert2'; // Vue support for Notification pop-ups and modals
import Swal from 'sweetalert2'
Vue.use(VueSweetalert2);
window.Swal = Swal
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
window.Toast = Toast

import VueProgressBar from 'vue-progressbar' // Progress bars
Vue.use(VueProgressBar, {
  color: '#bffaf3',
  failedColor: 'red',
  height: '3px'
})

import User from './helpers/User' // Imports helpers
import Storage from './helpers/Storage' // Imports helpers
window.Storage = Storage
window.User = User
