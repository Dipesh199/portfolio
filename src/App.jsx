import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import FeaturedProjects from './components/FeaturedProjects';
import ProjectDetailModal from './components/ProjectDetailModal';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Handle body scroll lock
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen text-white selection:bg-purple-500/30">
      <AnimatedBackground />
      <Navbar />
      
      <main>
        <FeaturedProjects onProjectClick={setSelectedProject} />
        <ResumeSection />
        <ContactSection />
      </main>

      <Footer />

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
