import mixin from './mixin.js'
import App from './App.vue'

new Vue({
  render: h => h(App),
  mixins: [mixin],
}).$mount('#app')
