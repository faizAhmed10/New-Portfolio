'use client';

import Image from 'next/image';
import { FiBook, FiFilm, FiStar, FiAperture } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Get to know the person behind the code
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-center mb-16">
            <div className="md:col-span-2">
              <motion.div 
                className="relative aspect-square rounded-2xl overflow-hidden shadow-md"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 from-primary/20 to-accent/20 z-0" />
                <Image
                  src="/images/my-portfolio-image.png"
                  alt="Profile Image"
                  fill
                  className="object-cover z-10"
                />
              </motion.div>
            </div>

            <motion.div 
              className="md:col-span-3"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Hello there!</h2>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate web developer with a love for creating elegant, 
                user-friendly digital experiences. My journey in web development began with a curiosity 
                about how websites work.
              </p>
              <p className="text-lg text-muted-foreground">
                When I'm not coding, you can find me exploring the cosmos through 
                astronomy, enjoying a thoughtful game of chess, writing poetry, or immersing 
                myself in realistic films that challenge my perspective on life.
              </p>
            </motion.div>
          </div>

          {/* Interests Section */}
          <motion.div
            className="mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center">My Interests</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-background rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiStar className="text-primary text-xl" />
                </div>
                <h3 className="text-lg font-medium mb-2">Space & Astronomy</h3>
                <p className="text-muted-foreground text-sm">
                  Fascinated by the cosmos and our place within it
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiAperture className="text-primary text-xl" />
                </div>
                <h3 className="text-lg font-medium mb-2">Chess</h3>
                <p className="text-muted-foreground text-sm">
                  Strategic thinking and the beauty of the game
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiBook className="text-primary text-xl" />
                </div>
                <h3 className="text-lg font-medium mb-2">Poetry</h3>
                <p className="text-muted-foreground text-sm">
                  Expressing complex emotions through the written word
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiFilm className="text-primary text-xl" />
                </div>
                <h3 className="text-lg font-medium mb-2">Realistic Films</h3>
                <p className="text-muted-foreground text-sm">
                  Stories that reflect the complexity of human experience
                </p>
              </div>
            </div>
          </motion.div>

          {/* Journey Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center">My Journey</h2>
            <div className="space-y-12">
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary" />
                <h3 className="text-xl font-bold mb-2">Web Development Beginnings</h3>
                <p className="text-muted-foreground mb-2">2022 - 2023</p>
                <p className="text-base">
                  Started learning HTML, CSS, and JavaScript. Built my first static websites and discovered a passion for frontend development.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary" />
                <h3 className="text-xl font-bold mb-2">Expanding My Skills</h3>
                <p className="text-muted-foreground mb-2">2024</p>
                <p className="text-base">
                  Delved into modern JavaScript frameworks like React and Next.js. 
                  Began working with backend technologies and databases to create full-stack applications.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary" />
                <h3 className="text-xl font-bold mb-2">Further Growth</h3>
                <p className="text-muted-foreground mb-2">2025</p>
                <p className="text-base">
                  Working on diverse projects that challenge my skills and push me to learn new technologies. Learning how to integrate and work with AI
                  focusing on creating accessible, performant, and beautiful web experiences.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}