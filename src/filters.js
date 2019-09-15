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
  Vue.filter('percent', function (value,prop) {
    let Value = value.toString();
    if(Value.substring(Value.length - 1,Value.length) == "%"){
      return Value;
    }
    return Value + "%";
  })
]

export default filters;
