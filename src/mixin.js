require('./bootstrap')
import router from './routes.js'
import store from './state.js'
import filters from './filters.js'
import directives from './directives.js'

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
