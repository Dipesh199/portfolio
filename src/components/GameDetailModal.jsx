import { motion } from 'framer-motion';
import { FiX, FiDownload, FiStar, FiChevronRight, FiPlayCircle } from 'react-icons/fi';
import ScreenshotCarousel from './ScreenshotCarousel';

const GameDetailModal = ({ game, onClose }) => {
  if (!game) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0a0a0c]/90 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Modal Container */}
      <motion.div
        layoutId={`card-${game.id}`}
        className="relative w-full max-w-6xl h-full max-h-[90vh] bg-[#0a0a0c] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl overflow-y-auto scrollbar-hide"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all border border-white/10"
        >
          <FiX size={24} />
        </button>

        {/* Hero Banner */}
        <div className="relative aspect-[1024/500] w-full overflow-hidden">
          <img src={game.banner} alt={game.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/20 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="relative px-6 md:px-12 pb-12 -mt-24">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Icon */}
            <motion.div
              layoutId={`icon-${game.id}`}
              className={`w-32 h-32 md:w-48 md:h-48 rounded-[2.5rem] bg-gradient-to-br ${game.theme.primary} p-1.5 shadow-2xl ${game.theme.glow}`}
            >
              <img src={game.icon} alt={game.title} className="w-full h-full rounded-[2.2rem] object-cover" />
            </motion.div>

            {/* Header Info */}
            <div className="flex-1 space-y-4 pt-24 md:pt-28">
              <div className="flex flex-wrap items-center gap-4">
                <h2 className="text-4xl md:text-6xl font-black text-white">{game.title}</h2>
                <span className={`px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-bold ${game.theme.text}`}>
                  {game.status}
                </span>
              </div>
              <p className="text-xl text-gray-400 font-medium max-w-2xl">{game.shortDescription}</p>
              
              {/* Stats */}
              <div className="flex gap-8 py-6 border-y border-white/5">
                <div className="space-y-1">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Downloads</p>
                  <div className="flex items-center gap-2 text-white font-black text-xl">
                    <FiDownload className="text-purple-500" />
                    {game.stats.downloads}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Rating</p>
                  <div className="flex items-center gap-2 text-white font-black text-xl">
                    <FiStar className="text-yellow-500 fill-yellow-500" />
                    {game.stats.rating}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
            {/* Left Column: Description & Screenshots */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-purple-500 rounded-full" />
                  Visual Showcase
                </h3>
                <ScreenshotCarousel screenshots={game.screenshots} />
              </section>

              <section>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-purple-500 rounded-full" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {game.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${game.theme.primary}`}>
                        <FiChevronRight className="text-white" />
                      </div>
                      <span className="font-semibold text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: CTA & Additional Info */}
            <div className="space-y-8">
              <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm sticky top-8">
                <h4 className="text-xl font-bold mb-6">Experience Now</h4>
                <div className="space-y-4">
                  <motion.a
                    href={game.playStoreLink}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r ${game.theme.primary} rounded-2xl font-bold text-white shadow-xl`}
                  >
                    <FiPlayCircle size={24} />
                    Get it on Play Store
                  </motion.a>
                  <button className="w-full py-4 bg-white/5 hover:bg-white/10 rounded-2xl font-bold text-white border border-white/10 transition-colors">
                    Official Website
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Category</span>
                    <span className="text-white font-medium">{game.category}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Last Update</span>
                    <span className="text-white font-medium">May 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GameDetailModal;
