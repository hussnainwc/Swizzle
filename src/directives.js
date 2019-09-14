require('./bootstrap')

const directives = [
    Vue.directive('color',{
    inserted: function(app,binding){
      app.style.color = binding.value;
    }
    }),
    Vue.directive('display',{
      inserted: function(app,binding){
        app.style.display = binding.value;
      }
    }),
    Vue.directive('center',{
      inserted: function(app){
        app.style.textAlign = "center";
      }
    }),
    Vue.directive('size',{
      inserted: function(app,binding){
        app.style.fontSize = binding.value;
      }
    })
]

export default directives;
