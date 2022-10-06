import { motion } from "framer-motion";
import Card from "./Card"

function MovieCardList({movies}) {

  console.log(movies)
  return (
    
<div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
            
          
            {Object.entries(movies).map((movie, i) => (
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
                <Card
                  
                  key={movie.id}
                  maintitle={movie.title}
                  subtitle={movie.release_date}
                  
                  
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