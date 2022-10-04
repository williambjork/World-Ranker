import { motion } from "framer-motion"
import Thumbnail from "./Thumbnail"
import Backdrop from "./Backdrop"

const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

function OpenCard({maintitle, subtitle, metacritic, image, handleClose}) {
  return (
    
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}  
                className="margin-auto flex flex-col items-center w-screen h-screen"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit">

                    <h2>{maintitle}</h2>
                    <button onClick={handleClose}>Cose</button>

            </motion.div>

        </Backdrop>
   
        
      
    
  )
}

export default OpenCard