'use client';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaLaptopCode, FaBrain, FaCogs, FaTools } from 'react-icons/fa';

const Skills = () => {
    const skills = [
        {
            category: 'Frontend',
            items: ['React', 'Next.js', 'Vite', 'Tailwind CSS'],
            icon: <FaLaptopCode className="text-2xl text-blue-500" />
        },
        {
            category: 'Backend',
            items: ['Node.js', 'Express', 'Python'],
            icon: <FaCode className="text-2xl text-green-500" />
        },
        {
            category: 'Database & Tools',
            items: ['PostgreSQL', 'MongoDB', 'Supabase'],
            icon: <FaDatabase className="text-2xl text-purple-500" />
        },
        {
            category: 'Programming Languages',
            items: ['Javascript', 'TypeScript', 'Python', 'C++'],
            icon: <FaBrain className="text-2xl text-red-500" />
        },
        {
            category: 'Skills',
            items: ['Full Stack Development', 'Machine Learning', 'Version Control'],
            icon: <FaCogs className="text-2xl text-yellow-500" />
        },
        {
            category: 'Others',
            items: ['Git', 'Docker', "Sci-Kit Learn"],
            icon: <FaTools className="text-2xl text-indigo-500" />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const skillItemVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <section className="py-20  dark:from-gray-900 dark:to-gray-800 shadow-sm" id='skills'>
            <motion.div
                className="container px-4 mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.h2
                    className="text-4xl font-bold mb-16 text-center text-blue-800 dark:text-blue-500 bg-clip-text"
                    variants={itemVariants}
                >
                    Skills & Technologies
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex items-center mb-6">
                                <div className="mr-4">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                    {skill.category}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, itemIndex) => (
                                    <motion.span
                                        key={itemIndex}
                                        variants={skillItemVariants}
                                        className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-blue-1000/10 
                                                 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium
                                                 hover:from-blue-500/20 hover:to-purple-500/20 transition-colors
                                                 cursor-default"
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Skills;