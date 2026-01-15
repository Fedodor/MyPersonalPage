import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { styles } from '../styles';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce platform with shopping cart, payments, and admin dashboard",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            github: "https://github.com/yourusername/project1",
            demo: "https://project1-demo.com",
            gradient: "from-pink-500 to-rose-500"
        },
        {
            title: "Task Management App",
            description: "Modern task management application with drag-and-drop and real-time updates",
            tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
            github: "https://github.com/yourusername/project2",
            demo: "https://project2-demo.com",
            gradient: "from-cyan-500 to-blue-500"
        },
        {
            title: "Social Media Dashboard",
            description: "Analytics dashboard for social media with data visualization and reporting",
            tech: ["React", "D3.js", "Express", "Redis"],
            github: "https://github.com/yourusername/project3",
            demo: "https://project3-demo.com",
            gradient: "from-purple-500 to-indigo-500"
        },
        {
            title: "AI Chat Application",
            description: "Chat application integrated with AI for smart replies and sentiment analysis",
            tech: ["React", "OpenAI", "Socket.io", "Node.js"],
            github: "https://github.com/yourusername/project4",
            demo: "https://project4-demo.com",
            gradient: "from-emerald-500 to-teal-500"
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center relative py-20" ref={ref}>
            <div className={styles.sectionContainer}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${styles.gradientText} text-center`}>
                        Projects
                    </h2>
                    <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                        Some of my recent work showcasing my skills and experience
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className={`${styles.projectCard} group`}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                {/* Project Header with Gradient */}
                                <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-t-2xl mb-6`} />

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-cyan-400"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm hover:text-cyan-400 transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                        <span>Code</span>
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm hover:text-cyan-400 transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        <span>Live Demo</span>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
