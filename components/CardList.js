import { motion } from "framer-motion";
import Card from "./Card"

function CardList({games}) {
  return (
    
<div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
            
          
            {games.map((game) => (
              <motion.div
              initial={{
                x: -200,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: 'spring',
                duration: 1,
              }}
                >
                <Card
                  metacritic={game.metacritic}
                  key={game.id}
                  maintitle={game.name}
                  subtitle={game.released}
                  image={game?.background_image}
                  
                />
               
              </motion.div>
              
            ))}
            <div className="flex br-3" >
                <button>next</button>
              </div>
          </div>
        
      
  )
}

export default CardList