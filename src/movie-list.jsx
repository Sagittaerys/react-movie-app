import MovieCard from "./movie-card";
import movies from "./movies";

export default function MovieList(){
  return(
     <div className="all-movies">
           


                {movies.map((movie, index) => (
                  <MovieCard key={index} {...movie} />
                ))
                } 

                
     </div>
  );
}

