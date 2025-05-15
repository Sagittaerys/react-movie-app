import MovieCard from "./movie-card";
import movies from "./movies";
import RaceTo from "./race-to";
import { Link } from 'react-router'


export default function MovieList(){
  return(
     <div className="all-movies">
           


                {movies.map((movie, index) => (
                  <Link to={`/movie/${movie.id}`} key={movie.id}>
                  <MovieCard key={index} {...movie} />
                  </Link>
                ))
                } 

               

               
     </div>
  );
}

