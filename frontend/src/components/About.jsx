import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, Layout } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <BookOpen className="text-blue-400" />,
      title: "BSCS Student",
      desc: "Currently pursuing Bachelor's in Computer Science, mastering algorithms, data structures, and software engineering principles."
    },
    {
      icon: <Layout className="text-indigo-400" />,
      title: "UI/UX Designer",
      desc: "Creating pixel-perfect interfaces with Tailwind CSS and React, focusing on user experience and responsive design."
    },
    {
      icon: <Code2 className="text-emerald-400" />,
      title: "MERN Stack Developer",
      desc: "Building robust backend architectures and dynamic frontends using MongoDB, Express, React, and Node.js."
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold">Transforming Ideas into Reality</h3>
          <p className="text-slate-400 leading-relaxed">
            I am Muhammad Saqlain Ramzan, a dedicated Computer Science student with a deep interest in web technologies. My journey in tech is driven by curiosity and the desire to build tools that solve real-world problems.
          </p>
          <p className="text-slate-400 leading-relaxed">
            With a strong foundation in designing with Tailwind CSS and developing with the MERN stack, I bridge the gap between aesthetics and functionality. I enjoy the process of turning a design concept into a fully functional, scalable web application.
          </p>
          <div className="pt-4">
            <div className="flex gap-10">
              <div>
                <h4 className="text-3xl font-bold text-white">20+</h4>
                <p className="text-slate-500 text-sm">Projects Done</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">BSCS</h4>
                <p className="text-slate-500 text-sm">Level</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">React</h4>
                <p className="text-slate-500 text-sm">Specialty</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 flex gap-4 items-start"
            >
              <div className="p-3 bg-white/5 rounded-lg">
                {card.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">{card.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
