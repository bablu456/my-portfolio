import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl font-bold mb-4">
                Let's <span className="text-cyan-400">Connect</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
                I am currently looking for new opportunities as a Full Stack Developer. 
                Whether you have a question or just want to say hi, my inbox is always open!
            </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
            
            {/* LEFT SIDE: Contact Info */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
            >
                {/* Email Item */}
                <div className="flex items-center gap-6 p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition duration-300 border border-slate-700 hover:border-cyan-400">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400 text-xl">
                        <FaEnvelope />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Email Me</h3>
                        <a href="mailto:your.email@example.com" className="text-slate-400 hover:text-cyan-400 transition">
                            your.email@example.com
                        </a>
                    </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-6 p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition duration-300 border border-slate-700 hover:border-cyan-400">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400 text-xl">
                        <FaMapMarkerAlt />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Location</h3>
                        <p className="text-slate-400">India (Open to Remote)</p>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 pt-4">
                    <a href="#" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-xl hover:bg-cyan-500 hover:text-white transition duration-300">
                        <FaGithub />
                    </a>
                    <a href="#" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-xl hover:bg-cyan-500 hover:text-white transition duration-300">
                        <FaLinkedin />
                    </a>
                </div>
            </motion.div>

            {/* RIGHT SIDE: Contact Form (UI Only) */}
            <motion.form 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
            >
                <div>
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full p-4 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 text-white transition"
                    />
                </div>
                <div>
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full p-4 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 text-white transition"
                    />
                </div>
                <div>
                    <textarea 
                        rows="5"
                        placeholder="Your Message" 
                        className="w-full p-4 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 text-white transition"
                    ></textarea>
                </div>
                
                <button 
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-bold text-lg hover:opacity-90 transition transform hover:scale-[1.02]"
                >
                    Send Message
                </button>
            </motion.form>

        </div>
      </div>
      
      {/* Simple Footer Copyright */}
      <div className="text-center mt-20 text-slate-500 text-sm">
        <p>© 2026 Your Name. Built with React & Tailwind.</p>
      </div>
    </section>
  );
};

export default Contact;