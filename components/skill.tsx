import React from 'react'

const Skills = () => {
    const skills = [
        { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
        { category: 'Backend', items: ['Node.js', 'Express', 'Python'] },
        { category: 'Database & Tools', items: ['PostgreSQL', 'MongoDB', 'Git'] },
        { category: 'Programming Languages', items: ['Javascript', 'TypeScript', 'Python', 'C++', ] }
      ];
  return (
    <section className="py-20 bg-secondary" id='skills'>
        <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
            <div key={index} className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                    <span
                    key={itemIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                    {item}
                    </span>
                ))}
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>
  )
}

export default Skills