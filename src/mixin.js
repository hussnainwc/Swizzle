require('./bootstrap')
import router from './routes.js'
import store from './state.js'
import filters from './filters.js'
import directives from './directives.js'

// Creates a mixin for required components so main instance does not feel verbose
var mixin = {
  store,
  router:router,
  filters:{
    filters
  },
  directives:{
    directives
  }
}

export default mixin;
