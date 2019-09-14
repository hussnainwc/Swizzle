require('./bootstrap')

const filters = [
  Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString();
    return value.toUpperCase();
  }),
  Vue.filter('catch', function (value,prop) {
    return value ? value : "error displaying " + prop + " please try again later";
  }),
]

export default filters;
