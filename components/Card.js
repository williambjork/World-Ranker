import { useEffect, useState } from "react";
import Thumbnail from "./Thumbnail";
import { motion } from "framer-motion";
import OpenCard from "./OpenCard";

function Card({ maintitle, subtitle, metacritic, image }) {
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <OpenCard maintitle={maintitle} subtitle={subtitle} metacritic={metacritic} image={image} />
        
      ) : (
        <motion.div
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          whileHover={{ scale: 1.06 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <a
            href=""
            className="border-b-2  border-gray-600 relative block overflow-hidden bg-center rounded-xl "
          >
            <div>
              <Thumbnail image={image} />
            </div>

            <div className="relative  p-3 text-white bg-gray-600 bg-opacity-30">
              <h5 className="text-xl  truncate font-oswald">{maintitle}</h5>

              <p className="text-xs text-gray-300 truncate">{subtitle}</p>

              {isOpen && (
                <div>
                  <p className="font-sm">Metacritic: {metacritic}</p>
                </div>
              )}
            </div>
          </a>
        </motion.div>
      )}
    </>
  );
}

export default Card;
