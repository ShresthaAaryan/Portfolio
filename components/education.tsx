'use client';

import { GraduationCap, Award } from 'lucide-react';

interface EducationItem {
    degree: string;
    institution: string;
    period: string;
    location: string;
    description: string;
    achievements?: string[];
}

const educationData: EducationItem[] = [
    {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "Vellore Institute of Technology",
        period: "2022 - 2026",
        location: "Vellore, India",
        description: "Focus on Full Stack Development, Machine Learning and Data Science",
        achievements: [
            "CGPA: 8.61/10"
        ]
    },
    {
        degree: "Cambridge International AS & A Levels",
        institution: "Little Angels College of Higher Studies",
        period: "2019 - 2021",
        location: "Hattiban, Nepal",
        description: "Completed with focus on Physics, Computer Science, and Mathematics.",
        achievements: [
            "Achieved excellent academic performance"
        ]
    },
    {
        degree: "Secondary Education",
        institution: "Malpi International School",
        period: "2016 - 2019",
        location: "Panauti, Nepal",
        description: "Completed secondary education with strong academic performance.",
        achievements: [
            "CGPA: 3.65/4"
        ]
    }
];

const Education = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-cormorant font-medium mb-6">Education</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            My academic journey and qualifications that have shaped my expertise in technology and development.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {educationData.map((item, index) => (
                            <div key={index} className="relative">
                                {/* Timeline line */}
                                {index !== educationData.length - 1 && (
                                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
                                )}

                                <div className="relative flex gap-8">
                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1C1C1C] shadow-lg flex items-center justify-center">
                                        <GraduationCap className="w-6 h-6 text-[#1C1C1C] dark:text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow">
                                        <div className="bg-white dark:bg-[#1C1C1C] rounded-lg shadow-lg p-6">
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                                <h3 className="text-xl font-cormorant font-medium">{item.degree}</h3>
                                                <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                                                    {item.period}
                                                </span>
                                            </div>
                                            <h4 className="text-lg font-medium mb-2">{item.institution}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                                {item.location}
                                            </p>
                                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                                {item.description}
                                            </p>

                                            {item.achievements && item.achievements.length > 0 && (
                                                <div className="space-y-2">
                                                    {item.achievements.map((achievement, idx) => (
                                                        <div key={idx} className="flex items-start gap-2">
                                                            <Award className="w-4 h-4 text-[#1C1C1C] dark:text-white mt-1 flex-shrink-0" />
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                                {achievement}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;