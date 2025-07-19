import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import projects from "../projects.json" 


export default function ProjectsPage() {
  return (
    <div className="py-16 sm:py-24 wrapper">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A collection of my recent work and personal projects
            </p>
          </div>

          <div className="grid gap-12">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="group relative grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Project Image */}
                <div className={`relative overflow-hidden rounded-lg border ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="aspect-[16/9] w-full bg-secondary/30">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.githubUrl &&
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" prefetch={false}>
                        <FiGithub className="mr-2" /> GitHub
                      </Link>
                    </Button>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}