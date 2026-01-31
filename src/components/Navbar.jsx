import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // This simple logic changes the navbar style when you scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-cyan-400 font-mono cursor-pointer">
          DevPortfolio<span className="text-white">.</span>
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition text-sm">
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button (Visible only on Mobile) */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown Menu (AnimatePresence makes it slide smoothly) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-md overflow-hidden border-b border-slate-800"
          >
            <ul className="flex flex-col items-center py-6 gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => setIsOpen(false)} // Close menu when clicked
                    className="text-slate-300 hover:text-cyan-400 text-lg font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="px-6 py-2 bg-cyan-500 text-slate-900 rounded font-bold hover:bg-cyan-400 transition">
                Hire Me
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;