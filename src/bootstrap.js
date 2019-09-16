import Vue from 'vue' // Imports vue
import axios from 'axios' // Imports axios to make AJAX request
import VueRouter from 'vue-router' // Imports Router to make SPA
import { Form, HasError, AlertError } from 'vform' // Imports Vue-forms
import Swal from 'sweetalert2' // Notification pop-ups
import VueSweetalert2 from 'vue-sweetalert2'; // Vue support for Notification pop-ups
import VueProgressBar from 'vue-progressbar' // Progress bars
import Vuex from 'vuex' // State management
import createPersistedState from 'vuex-persistedstate'// Persisted State management

import User from './helpers/User' // Imports helpers
import Storage from './helpers/Storage' // Imports helpers

// window.* = * -- This assigns a module for global usage
// Vue.use(*) -- This assigns plugins for Vue to use

window.Vue = Vue
Vue.config.productionTip = false

window.Vuex = Vuex
Vue.use(Vuex)

window.createPersistedState = createPersistedState

Vue.use(VueSweetalert2);
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

Vue.use(VueProgressBar, {
  color: '#bffaf3',
  failedColor: 'red',
  height: '3px'
})

window.Form = Form
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

window.Vue = Vue

Vue.use(VueRouter)

window.axios = axios

window.Swal = Swal
window.Toast = Toast

window.Storage = Storage
window.User = User
