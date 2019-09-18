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
  /**
    * Acts as a percent fall back
    * @param {value}
    * @return {value}
    */
  Vue.filter('percent', function (value,prop) {
    let Value = value.toString();
    if(Value.substring(Value.length - 1,Value.length) == "%"){
      return Value;
    }
    return Value + "%";
  })
]

export default filters;
