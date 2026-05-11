import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Ecosystem",
      desc: "Full MERN stack marketplace with JWT auth, Stripe integration, and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Redux"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management SaaS",
      desc: "Real-time collaborative project tool using Socket.io and beautiful Tailwind UI.",
      tags: ["React", "Express", "Tailwind", "Socket.io"],
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800",
      github: "#",
      demo: "#"
    },
    {
      title: "Health Analytics Platform",
      desc: "Data visualization dashboard for patient monitoring and hospital management.",
      tags: ["React", "D3.js", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1504868584819-f8eec0b3d77d?auto=format&fit=crop&q=80&w=800",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
        </div>
        <p className="text-slate-400 max-w-md">
          A selection of my recent work in full-stack development and UI design.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden group"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                <a href={project.github} className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href={project.demo} className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-400 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            <div className="p-6">
              <div className="flex gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider font-bold bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.desc}</p>
              <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
                <Layers size={14} /> View Case Study
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
