import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">BEHIND THE <span className="text-blue-500">GAMES</span></h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              I am Dipesh Korat, an independent game developer dedicated to creating high-fidelity mobile experiences. 
              I combine technical excellence with artistic vision to deliver games that resonate with players worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Innovation', desc: 'Pushing mobile hardware to its absolute limits.' },
              { label: 'Quality', desc: 'Pixel-perfect UI and fluid 60/120 FPS gameplay.' },
              { label: 'Passion', desc: 'Built by gamers, for gamers, with love.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center"
              >
                <h3 className="text-xl font-bold mb-3 text-white">{item.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
