import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedGames from './components/FeaturedGames';
import GameDetailModal from './components/GameDetailModal';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [selectedGame, setSelectedGame] = useState(null);

  // Handle body scroll lock
  useEffect(() => {
    if (selectedGame) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedGame]);

  return (
    <div className="min-h-screen text-white selection:bg-purple-500/30">
      <AnimatedBackground />
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturedGames onGameClick={setSelectedGame} />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />

      <AnimatePresence>
        {selectedGame && (
          <GameDetailModal 
            game={selectedGame} 
            onClose={() => setSelectedGame(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
