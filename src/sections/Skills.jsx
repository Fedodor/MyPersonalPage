import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { styles } from '../styles';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skillCategories = [
        {
            category: "Frontend",
            skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"]
        },
        {
            category: "Backend",
            skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST API", "GraphQL"]
        },
        {
            category: "Tools & Others",
            skills: ["Git", "Docker", "AWS", "Figma", "Jest", "CI/CD"]
        }
    ];

    return (
        <section id="skills" className="min-h-screen flex items-center relative" ref={ref}>
            <div className={styles.sectionContainer}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={`text-5xl md:text-6xl font-bold mb-16 ${styles.gradientText} text-center`}>
                        Skills
                    </h2>

                    <div className="max-w-5xl mx-auto space-y-12">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={categoryIndex}
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                            >
                                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                                    {category.category}
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skillIndex}
                                            className={styles.skillBadge}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{
                                                delay: categoryIndex * 0.2 + skillIndex * 0.05,
                                                duration: 0.3,
                                                type: 'spring',
                                                stiffness: 200
                                            }}
                                            whileHover={{
                                                y: -5,
                                                boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)'
                                            }}
                                        >
                                            {skill}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-1/4 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
                    <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
