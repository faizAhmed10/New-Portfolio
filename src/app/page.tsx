import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCode, FiLayers, FiUser } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen lg:mt-8 mt-20 wrapper">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/stars-bg.svg')] opacity-10 dark:opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up">
                <span className="gradient-text">Web Developer</span> with a passion for creating
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Crafting sophisticated digital experiences with modern technologies. Specializing in clean, elegant solutions for complex problems.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <Button asChild size="lg">
                <Link href="/projects" prefetch={false}>View My Work <FiArrowRight className="ml-2" /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact" prefetch={false}>Get In Touch</Link>
              </Button>
              </div>
            </div>
            <div className="flex-1 relative animate-float">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />
                <div className="relative z-10 glass rounded-2xl overflow-hidden w-full h-full">
                  <Image 
                    src="/images/hero-image.svg" 
                    alt="Developer illustration" 
                    fill 
                    className="object-cover p-8" 
                    priority 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combining creativity with technical expertise to build exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow ">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FiCode className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <p className="text-muted-foreground">
                Creating responsive, performant websites and applications using modern frameworks and best practices.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow ">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FiLayers className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Designing intuitive, beautiful interfaces that provide exceptional user experiences across all devices.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow ">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FiUser className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Solutions</h3>
              <p className="text-muted-foreground">
                Building tailored solutions that address specific business needs and technical challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start a project?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's collaborate to bring your ideas to life with elegant, sophisticated solutions.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact" prefetch={false}>Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
