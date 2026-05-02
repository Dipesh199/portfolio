import { motion } from 'framer-motion';
import { FiMail, FiTwitter, FiLinkedin, FiGlobe } from 'react-icons/fi';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                READY TO <span className="text-purple-500">COLLABORATE?</span>
              </h2>
              <p className="text-xl text-gray-400">
                Whether you have a question about our games, a business inquiry, or just want to say hi, we're all ears.
              </p>
              
              <div className="flex flex-col gap-4">
                <a href="mailto:mdfuture.13@gmail.com" className="flex items-center gap-4 text-white hover:text-purple-400 transition-colors group">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-purple-500/20 transition-all">
                    <FiMail size={24} />
                  </div>
                  <span className="text-lg font-bold">mdfuture.13@gmail.com</span>
                </a>
              </div>

              <div className="flex gap-4 pt-4">
                {[FiTwitter, FiLinkedin, FiGlobe].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="p-4 bg-white/5 rounded-2xl border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/10">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Message</label>
                  <textarea 
                    rows="4"
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-white text-black rounded-2xl font-black uppercase tracking-widest hover:bg-gray-200 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
