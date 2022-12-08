import { motion } from "framer-motion";
<<<<<<< HEAD
import Card from "./Card"

function CardList({games}) {
=======
import { useState } from "react";
import Card from "./Card"





function CardList({games, movies}) {

 



>>>>>>> 02686284714b3a96867d6f551a99339c0c64f342
  return (
    
<div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
            
          
            {games.map((game, i) => (
<<<<<<< HEAD
=======
              
              

>>>>>>> 02686284714b3a96867d6f551a99339c0c64f342
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
<<<<<<< HEAD
=======
              
>>>>>>> 02686284714b3a96867d6f551a99339c0c64f342
              transition={{
                type: 'spring',
                duration: 1,
                delay: i * 0.1
              }}
                >
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  {!isOpen && (
>>>>>>> 02686284714b3a96867d6f551a99339c0c64f342
=======
                  
>>>>>>> 93a75505a812ae102e516e4e95bc35fc927e0e6f
                <Card
                  metacritic={game.metacritic}
                  key={game.id}
                  maintitle={game.name}
                  subtitle={game.released}
                  image={game?.background_image}
<<<<<<< HEAD
                  
                />
               
              </motion.div>
              
            ))}
            <div className="flex br-3" >
                <button>next</button>
              </div>
=======
                  layout="card"
                  
                /> 
               
              </motion.div>  
            ))} 

      

<<<<<<< HEAD
        {isOpen && ( <OpenCard layoutId="card"
                                metacritic={game.metacritic}
                                key={game.id}
                                maintitle={game.name}
                                subtitle={game.released}
                                image={game?.background_image}/> )}
>>>>>>> 02686284714b3a96867d6f551a99339c0c64f342
=======
       
>>>>>>> 93a75505a812ae102e516e4e95bc35fc927e0e6f
          </div>
        
      
  )
}

export default CardList