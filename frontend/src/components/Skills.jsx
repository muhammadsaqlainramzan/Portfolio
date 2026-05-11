import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: "React.js", level: "90%", color: "bg-blue-400" },
    { name: "Tailwind CSS", level: "95%", color: "bg-cyan-400" },
    { name: "Node.js", level: "85%", color: "bg-green-500" },
    { name: "Express.js", level: "80%", color: "bg-gray-400" },
    { name: "MongoDB", level: "85%", color: "bg-emerald-500" },
    { name: "JavaScript (ES6+)", level: "90%", color: "bg-yellow-400" },
    { name: "Git & GitHub", level: "85%", color: "bg-orange-500" },
    { name: "RESTful APIs", level: "90%", color: "bg-purple-500" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="section-padding bg-slate-900/30">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            className="glass-card p-6 border-slate-800 hover:border-blue-500/50 transition-colors group"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-slate-200 group-hover:text-blue-400 transition-colors">{skill.name}</span>
              <span className="text-xs text-slate-500">{skill.level}</span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className={`h-full ${skill.color}`}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 flex flex-wrap justify-center gap-4">
        {['Figma', 'Postman', 'Redux', 'Context API', 'Vite', 'Firebase', 'Netlify', 'Vercel'].map((tool) => (
          <span key={tool} className="px-4 py-2 bg-slate-800/50 rounded-lg text-slate-400 text-sm font-medium border border-slate-700">
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
