import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// 1. YOUR PROJECT DATA
// This is where you edit your projects later. Just change the text here!
const projectsData = [
  {
    id: 1,
    title: "Microservices Banking App",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
    description: "A scalable banking system built with Spring Boot microservices, Eureka Server, and API Gateway.",
    tech: ["Java", "Spring Boot", "Microservices", "Docker"]
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description: "Modern personal portfolio with animations and responsive design.",
    tech: ["React", "Tailwind", "Framer Motion"]
  },
  {
    id: 3,
    title: "Inventory Management System",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&q=80&w=800",
    description: "Full stack inventory tracking with REST APIs and a React dashboard.",
    tech: ["Java", "Spring Boot", "React", "MySQL"]
  },
];

const Projects = () => {
  // This state remembers which filter is active. Default is "All".
  const [filter, setFilter] = useState("All");

  // This creates the list of unique categories for the buttons
  const categories = ["All", ...new Set(projectsData.map(p => p.category))];

  // This filters the projects based on what button you clicked
  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          My Projects
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border transition-all duration-300
                ${filter === cat 
                  ? 'bg-cyan-500 border-cyan-500 text-white' // Active style
                  : 'border-slate-600 text-slate-400 hover:border-cyan-400 hover:text-cyan-400' // Inactive style
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-cyan-500/20 transition-shadow duration-300 border border-slate-700"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden group">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <a href="#" className="p-2 bg-white rounded-full text-slate-900 hover:bg-cyan-400 transition"><FaGithub size={20}/></a>
                        <a href="#" className="p-2 bg-white rounded-full text-slate-900 hover:bg-cyan-400 transition"><FaExternalLinkAlt size={20}/></a>
                    </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, index) => (
                      <span key={index} className="text-xs bg-slate-900 text-cyan-400 px-2 py-1 rounded border border-slate-700">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;