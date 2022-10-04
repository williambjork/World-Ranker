import { motion } from "framer-motion"
import Thumbnail from "./Thumbnail"

function OpenCard({maintitle, subtitle, metacritic, image}) {
  return (
    
        <Backdrop onClick={handleCLose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}  
                className="modal orange-gradient"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit">

            </motion.div>

        </Backdrop>
   
        
      
    
  )
}

export default OpenCard