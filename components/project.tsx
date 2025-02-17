import React from 'react'
import Image from 'next/image';
import ghumti from '../public/ghumti.png'
import college from '../public/college.jpg'
import logo from '../public/logo1.jpg'

const Project = () => {
    const projects = [
        {
          title: "Restaurant Website",
          description: "A modern website for a Nepalese & Indian cuisine restaurant featuring online ordering and reservation.",
          tech: ["React", "Node.js","Express"],
          image: ghumti,
          website: "https://ghumti.au",
        },
        {
          title: "FourleafClover Website",
          description: "A modern, responsive, and visually engaging web application designed to showcase the brand's identity. ",
          tech: ["Next.js", "TypeScript", "Express", "Tailwind"],
          image: logo,
          website: "https://fourleaf-website.vercel.app/",
        },
        {
          title: "Nepali Common App",
          description: "A comprehensive platform for students to apply to Colleges and Universities in Nepal",
          tech: ["React", "Firebase"],
          image: college,
          website: "https://github.com/apurbaaaa/Nepali-Common-App",
        },
      ];
  return (
    <section id="projects" className="py-20 bg-muted">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <div className="aspect-[4/3] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-display text-2xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Link overlay */}
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label={`View ${project.title} project`}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Project