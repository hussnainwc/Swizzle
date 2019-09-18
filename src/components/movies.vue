Vue.component("movies",{

  <script>

  import movieCard from './movieCard'

  export default{

    functional:true, // functional component

    props:['movies','index'], // Props from parents

    /**
      * Functional component using JSX maps each movie to the movie component
      * If index is less than index passed from the parent so they can control
      * how many movies to show
      * @param {context,props}
      * @return {@component movie}
      * @throws {e}
      */
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
