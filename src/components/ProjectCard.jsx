import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={onClick}
      whileHover={{ y: -10 }}
      className="group relative cursor-pointer bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-white/20"
    >
      {/* Banner */}
      <div className="relative aspect-[1024/500] overflow-hidden">
        <motion.img
          src={project.banner}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6 pt-12 relative">
        {/* Icon - Floating on the edge of banner and content */}
        <motion.div
          layoutId={`icon-${project.id}`}
          className={`absolute -top-10 left-6 w-20 h-20 rounded-2xl bg-gradient-to-br ${project.theme.primary} p-1 shadow-2xl ${project.theme.glow}`}
        >
          <img src={project.icon} alt={project.title} className="w-full h-full rounded-[14px] object-cover" />
        </motion.div>

        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>
            <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold tracking-widest uppercase text-gray-400 border border-white/5">
              {project.status}
            </span>
          </div>
          <p className="text-sm text-gray-400 font-medium">{project.category}</p>
        </div>

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 bg-gradient-to-br ${project.theme.primary}`} />
      </div>
      
      {/* Subtle border glow on hover */}
      <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20 transition-colors duration-500`} />
    </motion.div>
  );
};

export default ProjectCard;
