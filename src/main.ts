import Vue from 'vue'
import Mixin from './mixin.js';
import App from './App.vue';

// This is the main vue-instance
new Vue({
  render: h => h(App),
  mixins: [Mixin],
}).$mount('#app')
