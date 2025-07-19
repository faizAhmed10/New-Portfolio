'use client';

import { FiCode, FiDatabase, FiLayers, FiServer, FiSmartphone } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number; // 1-10
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'design' | 'tools';
}

const skills: Skill[] = [
  // Frontend
  { name: 'HTML/CSS', level: 9, icon: <FiCode />, category: 'frontend' },
  { name: 'JavaScript', level: 6, icon: <FiCode />, category: 'frontend' },
  { name: 'TypeScript', level: 4, icon: <FiCode />, category: 'frontend' },
  { name: 'React', level: 7, icon: <FiCode />, category: 'frontend' },
  { name: 'Next.js', level: 5, icon: <FiCode />, category: 'frontend' },
  { name: 'Tailwind CSS', level: 7, icon: <FiLayers />, category: 'frontend' },
  
  // Backend
  { name: 'Django', level: 6, icon: <FiDatabase />, category: 'backend' },
  { name: 'PostgreSQL', level: 4, icon: <FiDatabase />, category: 'backend' },
  { name: 'REST APIs', level: 6, icon: <FiServer />, category: 'backend' },
  
  // Design
  { name: 'Figma', level: 4, icon: <FiLayers />, category: 'design' },
  { name: 'UI/UX Design', level: 5, icon: <FiLayers />, category: 'design' },
  { name: 'Responsive Design', level: 6, icon: <FiSmartphone />, category: 'design' },
  { name: 'Animation', level: 4, icon: <FiLayers />, category: 'design' },
  
  // Tools
  // { name: 'Git', level: 8, icon: <FiTool />, category: 'tools' },
  // { name: 'Docker', level: 7, icon: <FiTool />, category: 'tools' },
  // { name: 'CI/CD', level: 7, icon: <FiTool />, category: 'tools' },
  // { name: 'Jest', level: 7, icon: <FiTool />, category: 'tools' },
  // { name: 'Webpack', level: 6, icon: <FiTool />, category: 'tools' },
];

const categories = [
  { id: 'frontend', name: 'Frontend Development' },
  { id: 'backend', name: 'Backend Development' },
  { id: 'design', name: 'Design' },
  // { id: 'tools', name: 'Tools & Workflow' },
];

export default function SkillsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 sm:py-24 wrapper">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              My <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive overview of my technical expertise and capabilities
            </p>
          </div>

          <div className="space-y-20">
            {categories.map((category) => (
              <section key={category.id} className="space-y-8">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {category.name}
                </h2>
                
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {skills
                    .filter((skill) => skill.category === category.id)
                    .map((skill) => (
                      <motion.div
                        key={skill.name}
                        className="bg-background rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow"
                        variants={item}
                      >
                        <div className="flex items-center mb-4">
                          <div className="mr-4 text-primary text-xl">
                            {skill.icon}
                          </div>
                          <h3 className="text-lg font-medium">{skill.name}</h3>
                        </div>
                        
                        <div className="w-full bg-secondary rounded-full h-2.5">
                          <div 
                            className="bg-primary h-2.5 rounded-full" 
                            style={{ width: `${(skill.level / 10) * 100}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground mt-2">
                          <span>Beginner</span>
                          <span>Expert</span>
                        </div>
                      </motion.div>
                    ))}
                </motion.div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}