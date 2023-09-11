import { useEffect, useState } from "react";
import Thumbnail from "./Thumbnail";
import { motion } from "framer-motion";
import OpenCard from "./OpenCard";
import ReactCardFlip from 'react-card-flip';
import ScreenShot from "./ScreenShot"

function Card({ maintitle, subtitle, metacritic, image, screenshot }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [metaColor, setMetaColor] = useState(null);

  useEffect(() => {
    if (metacritic >= 85) {
      setMetaColor("green-400");
    } else {
      setMetaColor("white");
    }
  }, [metacritic]);

  const handleClick = (e) => {
    e.preventDefault();
    setisFLipped(!isFlipped);
  };

  return (
    <>
     
        
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <motion.div
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            e.preventDefault();
            setIsFlipped(prevState => ({ isFlipped: !prevState.isFlipped }));
          }}
         
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <a
            href=""
            className="border-b-2  border-gray-600 relative block overflow-hidden bg-center rounded-xl hover:scale-105"
          >
            <div >
              <Thumbnail image={image} />
            </div>

            <div className="relative  p-3 text-white bg-gray-600 bg-opacity-30">
              <h5 className="text-xl  truncate font-oswald">{maintitle}</h5>

              <p className="text-xs text-gray-300 truncate">{subtitle}</p>

              
                
            </div>
          </a>
        </motion.div>

        <motion.div
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            e.preventDefault();
            setIsFlipped(!isFlipped);
          }}
          
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <a
            href=""
            className="border-b-2  border-gray-600 bg-gray-600 bg-opacity-30 relative block overflow-hidden bg-center rounded-xl hover:scale-105"
          >
            <div className="">
              <ScreenShot screenshot={screenshot} />
            </div>

            <div className="relative -mt-10  p-3 text-white ">
              <h5 className="text-md mb-3  truncate font-oswald">{maintitle}</h5>

              <p className="text-xs text-gray-300 truncate">{subtitle}</p>

              
                <div>
                  <p className="text-xs mb-4 text-gray-300">Metacritic: {metacritic}</p>
                </div>
            
            </div>
          </a>
        </motion.div>
        </ReactCardFlip>
    </>
  );
}

export default Card;
