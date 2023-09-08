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
    
    <motion.div
    transition={{ duration: 0.2 }}
    onClick={(e) => {
      e.preventDefault();
      setIsOpen(!isOpen);
    }}
   
  >
    <a
      href=""
      className="border-b-2  border-gray-600  absolute inset-0 flex justify-center items-center overflow-hidden bg-center rounded-xl "
      style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
    >
      <div>
        <Thumbnail image={image} width={800} height={1000} objectFit="contain" />
      </div>

      <div className="relative  p-3 text-white bg-gray-600 bg-opacity-30">
        <h5 className="text-xl  truncate font-oswald">{maintitle}</h5>

        <p className="text-xs text-gray-300 truncate">{subtitle}</p>

        <div>
          <p className="font-sm">Metacritic: {metacritic}</p>
        </div>
      </div>
    </a>
  </motion.div>
   
        
      
    
  )
}

export default OpenCard