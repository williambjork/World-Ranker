import React from 'react'
import { motion } from "framer-motion";
import Thumbnail from './Thumbnail';

function MusicCard({image, maintitle, subtitle}) {
  return (
    <motion.div
      
      transition={{ duration: 0.2}}
      onClick={() => (modalOpen ? close() : open())}
      whileHover={{ scale: 1.06 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      
    >

      
        <a
          href=""
          className="border-b-2  border-gray-600 relative block overflow-hidden bg-center rounded-xl "
        >
          {/*
        <span className={`absolute z-10 inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-black rounded-full  right-4 top-4`}>
          {metacritic}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 ml-1.5 text-yellow-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </span>
  */}

          <div>
            <Thumbnail image={image} />
          </div> 
          

          <div className="relative  p-3 text-white bg-gray-600 bg-opacity-30">
            <h5 className="text-xl  truncate font-oswald">{maintitle}</h5>

            <p className="text-xs text-gray-300 truncate">{subtitle}</p>
          </div>
        </a>
      
      
    </motion.div>
  )
}

export default MusicCard