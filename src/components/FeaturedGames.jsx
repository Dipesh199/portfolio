import { motion } from 'framer-motion';
import { games } from '../data/games';
import GameCard from './GameCard';

const FeaturedGames = ({ onGameClick }) => {
  return (
    <section id="games" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
          >
            FEATURED <span className="text-purple-500">TITLES</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GameCard 
                game={game} 
                onClick={() => onGameClick(game)} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
