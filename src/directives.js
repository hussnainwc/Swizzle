require('./bootstrap')

const directives = [

  /**
    * Vue directive v-color to change color of the element
    * @param {color}
    * @return {null}
    */
    Vue.directive('color',{
    inserted: function(app,binding){
      app.style.color = binding.value;
    }
    }),

    /**
      * Vue directive v-display to change display type of an element
      * @param {display}
      * @return {null}
      */
    Vue.directive('display',{
      inserted: function(app,binding){
        app.style.display = binding.value;
      }
    }),

    /**
      * Vue directive v-center to align an element in center
      * @param {center}
      * @return {null}
      */
    Vue.directive('center',{
      inserted: function(app){
        app.style.textAlign = "center";
      }
    }),

    /**
      * Vue directive v-size to change the size of the font
      * @param {size}
      * @return {null}
      */
    Vue.directive('size',{
      inserted: function(app,binding){
        app.style.fontSize = binding.value;
      }
    })
]

export default directives;
