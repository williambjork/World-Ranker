

function CardList({games}) {
  return (
    {games.map((game) => (
        <motion.div
        initial={{
          x: -200,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: 'spring',
          duration: 1,
        }}
          >
          <Card
            metacritic={game.metacritic}
            key={game.id}
            maintitle={game.name}
            subtitle={game.released}
            image={game?.background_image}
            
          />
         
        </motion.div>

        
      ))}
  )
}

export default CardList