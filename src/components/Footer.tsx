
import React from 'react';
import { Linkedin, Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-resume-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {currentYear} Your Name. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
          </div>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-resume-light transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-resume-light transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://medium.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-resume-light transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
