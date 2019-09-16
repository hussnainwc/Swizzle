require('./bootstrap')

const filters = [
  /**
    * Capitalizes the value
    * @param {value}
    * @return {value}
    */
  Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString();
    return value.toUpperCase();
  }),

  /**
    * Acts as a fall back
    * @param {value}
    * @return {null}
    */
  Vue.filter('catch', function (value,prop) {
    return value ? value : "error displaying " + prop + " please try again later";
  }),
]

export default filters;
