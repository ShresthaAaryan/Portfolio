'use client';

import { Code2, Database, Wrench } from 'lucide-react';

interface Skill {
    name: string;
    category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Other';
}

interface SkillsCardProps {
    title: string;
    skills: Skill[];
}

const getCategoryIcon = (category: string) => {
    switch (category) {
        case 'Frontend':
            return <Code2 className="w-4 h-4" />;
        case 'Backend':
            return <Code2 className="w-4 h-4" />;
        case 'Database':
            return <Database className="w-4 h-4" />;
        case 'Tools':
            return <Wrench className="w-4 h-4" />;
        default:
            return <Code2 className="w-4 h-4" />;
    }
};

const SkillsCard = ({ title, skills }: SkillsCardProps) => {
    return (
        <div className="group bg-white dark:bg-[#1C1C1C] rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="mb-6">
                <h3 className="text-2xl font-cormorant font-medium text-[#1C1C1C] dark:text-white">
                    {title}
                </h3>
                <div className="w-12 h-0.5 bg-[#1C1C1C] dark:bg-white mt-2 group-hover:w-24 transition-all duration-300" />
            </div>
            <div className="grid grid-cols-1 gap-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-[#2A2A2A] group-hover:bg-gray-100 dark:group-hover:bg-[#333333] transition-colors duration-200"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-md bg-white dark:bg-[#1C1C1C] shadow-sm">
                                {getCategoryIcon(skill.category)}
                            </div>
                            <span className="font-medium text-[#1C1C1C] dark:text-white">
                                {skill.name}
                            </span>
                        </div>
                        <span className="text-xs px-2 py-1 rounded-full bg-[#1C1C1C]/10 dark:bg-white/10 text-[#1C1C1C] dark:text-white">
                            {skill.category}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsCard; 