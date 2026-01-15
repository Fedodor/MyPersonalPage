import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Send, Download, MessageSquare } from 'lucide-react';
import { styles } from '../styles';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const contactLinks = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: "Email",
            value: "your.email@example.com",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=your.email@example.com",
            color: "from-red-500 to-orange-500"
        },
        {
            icon: <Github className="w-6 h-6" />,
            label: "GitHub",
            value: "@yourusername",
            href: "https://github.com/yourusername",
            color: "from-gray-500 to-gray-700"
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            label: "LinkedIn",
            value: "/in/yourusername",
            href: "https://linkedin.com/in/yourusername",
            color: "from-blue-500 to-blue-700"
        },
        {
            icon: <MessageSquare className="w-6 h-6" />,
            label: "Telegram",
            value: "@yourusername",
            href: "https://t.me/yourusername",
            color: "from-cyan-500 to-blue-500"
        }
    ];

    return (
        <section id="contact" className="min-h-screen flex items-center relative py-20" ref={ref}>
            <div className={styles.sectionContainer}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${styles.gradientText} text-center`}>
                        Contact
                    </h2>
                    <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                        Ready to discuss your project or collaboration opportunities
                    </p>

                    <div className="max-w-4xl mx-auto">
                        {/* Contact Cards */}
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {contactLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${styles.glassCard} p-6 hover:bg-white/10 transition-all duration-300 group`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${link.color} group-hover:scale-110 transition-transform`}>
                                            {link.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">{link.label}</p>
                                            <p className="text-lg font-semibold group-hover:text-cyan-400 transition-colors">
                                                {link.value}
                                            </p>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Resume Download Button */}
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg
                         hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-300
                         shadow-2xl hover:shadow-cyan-500/50"
                            >
                                <Download className="w-6 h-6" />
                                Download Resume (PDF)
                            </a>
                        </motion.div>

                        {/* Call to Action */}
                        <motion.div
                            className={`mt-16 ${styles.glassCard} p-8 text-center`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.7, duration: 0.6 }}
                        >
                            <Send className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                            <h3 className="text-2xl font-bold mb-3">Let's build something amazing together!</h3>
                            <p className="text-gray-400 mb-6">
                                I am always open to new opportunities and interesting projects
                            </p>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=your.email@example.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-8 py-4 ${styles.glassCard} font-semibold hover:bg-white/10  
                         transform hover:scale-105 transition-all duration-300`}
                            >
                                <Mail className="w-5 h-5" />
                                Email Me
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 py-6 text-center text-gray-500 text-sm border-t border-white/10">
                <p>© 2026 Your Name. Created with ❤️ using React & Tailwind CSS</p>
            </div>
        </section>
    );
};

export default Contact;
