import Vue from 'vue'
import Mixin from './mixin.js';
import App from './App.vue';

new Vue({
  render: h => h(App),
  mixins: [Mixin],
  data(){
    return{
      tickets:""
    }
  }
}).$mount('#app')
