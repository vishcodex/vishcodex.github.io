
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';
import EditableContent from './EditableContent';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-b from-resume-light to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-resume-primary leading-tight">
              <EditableContent 
                initialContent="Hi, I'm Vishnu Putta" 
                contentType="title" 
                id="hero-name"
              />
            </h1>
            
            <div className="text-2xl md:text-3xl text-resume-secondary font-medium">
              <EditableContent 
                initialContent="AI Applied Engineer" 
                contentType="title" 
                id="hero-title"
              />
            </div>
            
            <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
              <EditableContent 
                initialContent="Experienced Applied AI and Data Engineering professional with a strong track record of designing and deploying real-world, intelligent systems. Skilled in integrating machine learning models into scalable pipelines, orchestrating ML workflows, and building robust data platforms across cloud environments. Adept at bridging the gap between research and production, delivering AI solutions that drive measurable impact. Passionate about solving complex challenges and creating end-to-end systems that translate advanced AI into business value."
                contentType="paragraph" 
                id="hero-bio"
                className="text-lg"
              />
            </div>
            
            <div className="pt-6 flex flex-wrap gap-4">
              <Button className="bg-resume-primary hover:bg-resume-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
              <Button variant="outline" className="border-resume-primary text-resume-primary hover:bg-resume-light" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
                View Resume
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/1705674763347.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              {/* Optional: Keep or remove the overlay effect */}
              {/* <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div> */}
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <Button 
            variant="ghost" 
            size="icon" 
            className="animate-bounce"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
