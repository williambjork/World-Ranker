import { useEffect, useState } from "react";
import Thumbnail from "./Thumbnail"

function Card({maintitle, subtitle, metacritic, image}) {

  const [metaColor, setMetaColor] = useState(null)

  useEffect(() => {
    if(metacritic >= 85) {
      setMetaColor("green-400")
    } else {
      setMetaColor("white")
    }
  }, [metacritic]);

  

  return (
    <div className=" ">
      <a
        href=""
        className=" relative block overflow-hidden bg-center rounded-xl "
        
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
        <Thumbnail  image={image} />
        </div>

        <div className="relative  p-4 text-white bg-black bg-opacity-40">
        
          <h5 className="text-xl font-bold  truncate">{maintitle}</h5>

          <p className="text-sm truncate">{subtitle}</p>
        </div>
      </a>
    </div>
  );
}

export default Card;
