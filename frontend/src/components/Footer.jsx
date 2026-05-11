import React from 'react';
import { Github, Linkedin, Twitter, Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <Terminal className="text-blue-500 w-8 h-8" />
            <span className="text-xl font-bold tracking-tight text-white">Saqlain<span className="text-blue-500">.dev</span></span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
        
        <div className="text-center md:text-left pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Muhammad Saqlain Ramzan. All rights reserved.</p>
          <div className="flex gap-6 justify-center mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
