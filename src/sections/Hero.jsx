import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { styles } from '../styles';

const Hero = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated background particles */}
            <div className="particles">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 4 + 2}px`,
                            height: `${Math.random() * 4 + 2}px`,
                            animationDelay: `${Math.random() * 20}s`,
                            animationDuration: `${Math.random() * 10 + 15}s`,
                        }}
                    />
                ))}
            </div>

            <div className={`${styles.sectionContainer} text-center z-10`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Profile Image */}
                    <motion.div
                        className="mb-8 inline-block"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-50 animate-pulse" />
                            <img
                                src="/profile.jpg"
                                alt="Profile"
                                className="relative w-40 h-40 rounded-full border-4 border-white/20 shadow-2xl object-cover"
                                onError={(e) => {
                                    e.target.src = 'https://ui-avatars.com/api/?name=Your+Name&size=200&background=0ea5e9&color=fff&bold=true';
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Name and Title */}
                    <motion.h1
                        className={`text-6xl md:text-8xl font-bold mb-6 ${styles.gradientText} text-shadow`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Your Name
                    </motion.h1>

                    <motion.p
                        className="text-2xl md:text-3xl text-gray-300 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        Full Stack Developer
                    </motion.p>

                    <motion.p
                        className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        Building modern web applications with a focus on performance and user experience
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-wrap gap-4 justify-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <button
                            onClick={() => scrollToSection('projects')}
                            className={styles.btnPrimary}
                        >
                            View Projects
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={styles.btnSecondary}
                        >
                            Contact Me
                        </button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        className="flex gap-4 justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=your.email@example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ChevronDown className="w-8 h-8 text-cyan-400" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
