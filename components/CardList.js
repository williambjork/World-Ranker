import { motion } from "framer-motion";
import { useState } from "react";
import Card from "./Card";

function CardList({ games, movies, isOpen }) {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
      {games.map((game, i) => (
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
          transition={{
            type: "spring",
            duration: 1,
            delay: i * 0.1,
          }}
        >
          {!isOpen && (
            <Card
              metacritic={game.metacritic}
              key={game.id}
              maintitle={game.name}
              subtitle={game.released}
              image={game?.background_image}
            />
          )}
        </motion.div>
      ))}

      {isOpen && (
        <OpenCard
          layoutId="card"
          metacritic={game.metacritic}
          key={game.id}
          maintitle={game.name}
          subtitle={game.released}
          image={game?.background_image}
        />
      )}
    </div>
  );
}

export default CardList;
