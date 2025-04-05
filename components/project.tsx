import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import ghumti from '../public/ghumtilogo.jpg'
import ecommerce from '../public/ecommercelogo.jpg'
import fourleaf from '../public/fourleaflogo.jpg'
import seims from '../public/seimslogo.png'

const Project = () => {
  const projects = [
    {
      title: "SEIMS",
      description: "A comprehensive system for managing sports equipment inventory and distribution",
      tech: ["React", "Node.js", "Express"],
      image: seims,
      website: "/project/seims",
    },
    {
      title: "Ecommerce Website",
      description: "A comprehensive platform for students to apply to Colleges and Universities in Nepal",
      tech: ["Next.js", "TypeScript", "Express", "Tailwind", "MongoDB", "Stripe"],
      image: ecommerce,
      website: "/project/ecommerce",
    },
    {
      title: "Restaurant Website",
      description: "A modern website for a Nepalese & Indian cuisine restaurant featuring online ordering and reservation.",
      tech: ["React", "Node.js", "Express"],
      image: ghumti,
      website: "/project/ghumti",
    },
    {
      title: "FourleafClover Website",
      description: "A modern, responsive, and visually engaging web application designed to showcase the brand's identity. ",
      tech: ["Next.js", "TypeScript", "Express", "Tailwind"],
      image: fourleaf,
      website: "/project/fourleaf",
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Animation variants for various card elements
  const imageVariants = {
    initial: { scale: 1.05, y: 0 },
    hover: { 
      scale: 1, 
      y: -10,
      transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  };


  const infoVariants = {
    initial: { y: 10, opacity: 0.8 },
    hover: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.3, delay: 0.1 }
    }
  };

  return (
    <section id="projects" className="py-20  dark:from-gray-900 dark:to-gray-800 shadow-sm">
      <div className="container mx-auto px-4 ">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display text-4xl md:text-5xl text-blue-800 dark:text-blue-500 bg-clip-text font-bold text-center mb-16"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-full mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover="hover"
              initial="initial"
              className="group flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden h-full transform-gpu transition-all duration-300"
            >
              {/* Card top with image and decorative elements */}
              <div className="relative overflow-hidden h-48">
                <motion.div
                  className="absolute inset-0"
                  variants={{
                    initial: { opacity: 0 },
                    hover: { opacity: 1, transition: { duration: 0.3 } }
                  }}
                />
                
                <motion.div
                  variants={imageVariants}
                  className="w-full h-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              
              {/* Card content */}
              <motion.div 
                className="flex flex-col flex-grow p-5 border-t border-gray-100 dark:border-gray-700"
                variants={infoVariants}
              >
                <h3 className="font-display text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0.7, scale: 0.95 }}
                        whileHover={{ opacity: 1, scale: 1.05 }}
                        className="text-xs px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <motion.div
                    className="flex items-center text-blue-500 text-sm font-medium"
                    variants={{
                      initial: { x: -5, opacity: 0.8 },
                      hover: { x: 0, opacity: 1, transition: { duration: 0.2 } }
                    }}
                  >
                    View Project
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Link overlay */}
              <a
                href={project.website}
                rel="noopener noreferrer"
                className="absolute inset-0 z-20"
                aria-label={`View ${project.title} project`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Project