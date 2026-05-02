import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const ScreenshotCarousel = ({ screenshots }) => {
  const containerRef = useRef(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      const offsetWidth = containerRef.current.offsetWidth;
      setConstraints({ left: -(scrollWidth - offsetWidth), right: 0 });
    }
  }, [screenshots]);

  return (
    <div className="relative group overflow-hidden rounded-2xl">
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={constraints}
        dragElastic={0.1}
        className="flex gap-4 cursor-grab active:cursor-grabbing px-2"
      >
        {screenshots.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="flex-shrink-0 w-[200px] md:w-[280px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 select-none bg-white/5"
          >
            <img 
              src={src} 
              alt={`Screenshot ${index + 1}`} 
              className="w-full h-full object-cover pointer-events-none"
            />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Visual cues for more content */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0a0a0c] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0a0a0c] to-transparent pointer-events-none" />
      
      {/* Scroll indicator hint */}
      <div className="mt-4 flex justify-center gap-1.5 opacity-30 group-hover:opacity-100 transition-opacity">
        {screenshots.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/50" />
        ))}
      </div>
    </div>
  );
};

export default ScreenshotCarousel;
