import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 text-center z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-none"
        >
          CRAFTING <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500">DIGITAL</span><br />
          ADVENTURES
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 font-medium"
        >
          We create immersive, visually stunning digital experiences that push the boundaries of modern technology and design.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
          >
            Explore Projects
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <FiChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
