import React from 'react';
import { motion } from 'framer-motion'; // Animation tool
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'; // Icons

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden relative">
      
      {/* Background Glow Effect (Tailwind) */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Main Content with Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <h2 className="text-xl text-cyan-400 font-mono mb-2">
          Hello, I am
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Your Name.
        </h1>
        
        <h3 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
          I build things for the web.
        </h3>

        <p className="max-w-xl mx-auto text-slate-400 text-lg mb-10 leading-relaxed">
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="#projects" 
            className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded hover:bg-cyan-400/10 transition duration-300"
          >
            Check out my work!
          </motion.a>
          
          <div className="flex gap-4 items-center">
             <a href="#" className="text-2xl hover:text-cyan-400 transition"><FaGithub /></a>
             <a href="#" className="text-2xl hover:text-cyan-400 transition"><FaLinkedin /></a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;