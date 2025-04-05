'use client';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';

interface EducationItem {
    degree: string;
    institution: string;
    year: string;
    description: string;
    location?: string;
}

const educationData: EducationItem[] = [
    {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "Vellore Institute of Technology",
        year: "2022 - 2026",
        location: "Vellore, India",
        description: "CGPA: 8.5/10\nFocus on Full Stack Development, Machine Learning and Data Science"
    },
    {
        degree: "Cambridge International AS & A Levels",
        institution: "Little Angels College of Higher Studies",
        year: "2019 - 2021",
        location: "Hattiban, Nepal",
        description: "Completed with focus on Physics, Computer Science, and Mathematics. Achieved excellent academic performance."
    },
    {
        degree: "Secondary Education",
        institution: "Malpi International School",
        year: "2016 - 2019",
        location: "Panauti, Nepal",
        description: "CGPA: 3.65/4"
    }
];

export default function Education() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Check on initial load
        checkIfMobile();
        
        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile);
        
        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    return (
        <div className="container mx-auto px-4 py-12 shadow-sm">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-center mb-12 text-blue-800 dark:text-blue-500"
            >
                Education
            </motion.h2>

            <div className="relative">
                {/* Timeline line */}
                <div className={`absolute ${isMobile ? 'left-4' : 'left-1/2'} transform ${isMobile ? '' : '-translate-x-1/2'} h-full w-1 bg-gray-200`}></div>

                {educationData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: isMobile ? -20 : (index % 2 === 0 ? -50 : 50) }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`mb-8 flex ${isMobile ? 'flex-row' : (index % 2 === 0 ? 'flex-row' : 'flex-row-reverse')}`}
                    >
                        {isMobile ? (
                            <>
                                <div className="w-8 flex items-start justify-center pt-6">
                                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                                </div>
                                <div className="w-full px-4">
                                    <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300 border border-blue-100">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-blue-500 p-2 rounded-full mr-4">
                                                <FaGraduationCap className="text-white text-xl" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-800">{item.institution}</h3>
                                                <p className="text-gray-600">{item.degree}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-500 mb-2 flex items-center">
                                            <FaCalendar className="mr-2" />
                                            {item.year}
                                        </p>
                                        {item.location && (
                                            <p className="text-gray-500 mb-2 flex items-center">
                                                <FaMapMarkerAlt className="mr-2" />
                                                {item.location}
                                            </p>
                                        )}
                                        <p className="text-gray-600 whitespace-pre-line">{item.description}</p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-1/2 px-4">
                                    <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300 border border-blue-100">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-blue-500 p-2 rounded-full mr-4">
                                                <FaGraduationCap className="text-white text-xl" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-800">{item.institution}</h3>
                                                <p className="text-gray-600">{item.degree}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-500 mb-2 flex items-center">
                                            <FaCalendar className="mr-2" />
                                            {item.year}
                                        </p>
                                        {item.location && (
                                            <p className="text-gray-500 mb-2 flex items-center">
                                                <FaMapMarkerAlt className="mr-2" />
                                                {item.location}
                                            </p>
                                        )}
                                        <p className="text-gray-600 whitespace-pre-line">{item.description}</p>
                                    </div>
                                </div>
                                <div className="w-1/2 flex items-center justify-center">
                                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                                </div>
                            </>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}