import Vue from 'vue'
window.Vue = Vue
Vue.config.productionTip = false

import axios from 'axios'
window.axios = axios

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
window.Vuex = Vuex
window.createPersistedState = createPersistedState

import VueSweetalert2 from 'vue-sweetalert2';
import Swal from 'sweetalert2'
Vue.use(VueSweetalert2);
window.Swal = Swal
window.Toast = Toast
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
  });

import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
  color: '#bffaf3',
  failedColor: 'red',
  height: '3px'
})

import User from './helpers/User'
import Storage from './helpers/Storage'
window.Storage = Storage
window.User = User
