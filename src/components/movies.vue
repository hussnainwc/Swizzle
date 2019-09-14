Vue.component("movies",{

  <script>

  import movieCard from './movieCard'

  export default{

    functional:true,

    props:['movies','index'],

     render(context,props){
       try{
         return props.props.movies.map((movie,index)=>{
           if(index < props.props.index){
             return <movieCard movie={movie}></movieCard>
           }
         })
       }
       catch (e){
         return null;
       }
     }

  }

  </script>

})
