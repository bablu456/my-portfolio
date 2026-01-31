import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // 1. DATA: Your specific tech stack organized by category
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java (Concurrency)", "JavaScript (ES6+)", "SQL", "C"]
    },
    {
      title: "Backend",
      skills: ["Spring Boot", "Hibernate", "Microservices", "RESTful APIs"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git & GitHub", "Docker", "Postman", "Linux/Unix"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: Bio & Stats */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
            <h2 className="text-4xl font-bold mb-6">
                About <span className="text-cyan-400">Me</span>
            </h2>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
                I am a passionate developer with a strong foundation in <span className="text-cyan-200">Java ecosystem</span> and modern web technologies. I love bridging the gap between complex back-end logic and intuitive front-end design.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                With experience in building scalable <span className="text-cyan-200">Microservices</span> and responsive web apps, I focus on writing clean, efficient, and maintainable code.
            </p>

            {/* Quick Stats */}
            <div className="flex gap-8">
                <div>
                    <h3 className="text-3xl font-bold text-cyan-400">Full Stack</h3>
                    <p className="text-slate-500 text-sm">Developer</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-cyan-400">5+</h3>
                    <p className="text-slate-500 text-sm">Projects</p>
                </div>
            </div>
        </motion.div>

        {/* RIGHT SIDE: Organized Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-800 p-6 rounded-xl border-l-4 border-cyan-400 hover:bg-slate-700 transition-colors shadow-lg"
                >
                    <h3 className="font-bold text-xl mb-4 text-white">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                            <span key={i} className="text-sm bg-slate-900 text-cyan-300 px-3 py-1 rounded-full border border-slate-700">
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default About;