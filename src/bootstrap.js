import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import { Form, HasError, AlertError } from 'vform'
import VueSweetalert2 from 'vue-sweetalert2';
import Swal from 'sweetalert2'
import VueProgressBar from 'vue-progressbar'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import User from './helpers/User'
import Storage from './helpers/Storage'

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
