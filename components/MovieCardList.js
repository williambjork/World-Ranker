import { motion } from "framer-motion";
import MovieCard from "./MovieCard"

function MovieCardList({movies}) {
  const url = "https://image.tmdb.org/t/p/w533_and_h300_bestv2"
  console.log(movies[0].original_title)
  return (

    
    
<div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
            
          
            {movies.map((movie, i) => (
              <motion.div
              initial={{
                x: -20,
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: 'spring',
                duration: 1,
                delay: i * 0.1
              }}
                >
                <MovieCard
                  
                  key={movie.id}
                  maintitle={movie.original_title}
                  subtitle={movie.release_date}
                  image={url + movie.backdrop_path}
                  
                  
                />
               
              </motion.div>
              
            ))}
            <div className="flex br-3" >
                <button>next</button>
              </div>
          </div>
        
      
  )
}

export default MovieCardList