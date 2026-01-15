import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Sparkles, Rocket } from 'lucide-react';
import { styles } from '../styles';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const features = [
        {
            icon: <Code2 className="w-8 h-8" />,
            title: "Clean Code",
            description: "Writing clean, maintainable code following best practices"
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: "Modern Design",
            description: "Creating modern interfaces with attention to detail"
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "Performance",
            description: "Optimizing performance for the best user experience"
        }
    ];

    return (
        <section id="about" className="min-h-screen flex items-center relative" ref={ref}>
            <div className={styles.sectionContainer}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${styles.gradientText} text-center`}>
                        About Me
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            className={`${styles.glassCard} p-8 md:p-12 mb-12`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                                Hello! I am a developer with a passion for building beautiful and functional web applications.
                                I specialize in modern technologies and always strive for excellence in every project.
                            </p>
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                My approach combines technical expertise with creative thinking, allowing me to create
                                solutions that not only work great but also look amazing.
                            </p>
                        </motion.div>

                        {/* Feature Cards */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className={`${styles.glassCard} p-6 text-center hover:bg-white/10 transition-all duration-300`}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
