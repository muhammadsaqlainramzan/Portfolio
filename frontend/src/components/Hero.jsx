import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center section-padding pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm">
          Available for new opportunities
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Hi, I'm <span className="text-gradient">Muhammad Saqlain Ramzan</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          A passionate <span className="text-slate-200">BSCS Student</span> and <span className="text-slate-200">MERN Stack Developer</span>. I design and build modern, high-performance web applications.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            to="projects"
            smooth={true}
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all transform hover:scale-105 cursor-pointer"
          >
            View My Work
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 glass-card hover:bg-white/10 text-white rounded-xl font-bold transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <Github size={20} /> GitHub
          </a>
        </div>

        <div className="flex justify-center gap-6 text-slate-400">
          <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin size={24} /></a>
          <a href="https://github.com/muhammadsaqlainramzan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"><Github size={24} /></a>
          <a href="mailto:muhammadsaqlainramzan4@gmail.com" className="hover:text-blue-500 transition-colors"><Mail size={24} /></a>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-20 text-slate-500"
      >
        <Link to="about" smooth={true} className="cursor-pointer">
          <ArrowDown size={32} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
