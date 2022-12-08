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
                    <div>
            <Thumbnail image={image} />
          </div>

          <div className="relative  p-3 text-white bg-gray-600 bg-opacity-30">
            <h5 className="text-xl  truncate font-oswald">{maintitle}</h5>

            <p className="text-xs text-gray-300 truncate">{subtitle}</p>
          </div>
        
                    <button onClick={handleClose}>Cose</button>

            </motion.div>

        </Backdrop>
   
        
      
    
  )
}

export default OpenCard