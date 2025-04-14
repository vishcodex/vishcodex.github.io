
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Github, Mail, Send, Map, Phone } from 'lucide-react';
import EditableContent from './EditableContent';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! This is a demo form - in a real application, this would send an email.');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-resume-primary">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-resume-light p-3 rounded-lg text-resume-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-resume-secondary">Email</h4>
                  <EditableContent 
                    initialContent="your.email@example.com" 
                    contentType="text" 
                    id="contact-email"
                    className="text-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-resume-light p-3 rounded-lg text-resume-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-resume-secondary">Phone</h4>
                  <EditableContent 
                    initialContent="+1 (555) 123-4567" 
                    contentType="text" 
                    id="contact-phone"
                    className="text-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-resume-light p-3 rounded-lg text-resume-primary">
                  <Map className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-resume-secondary">Location</h4>
                  <EditableContent 
                    initialContent="San Francisco, CA" 
                    contentType="text" 
                    id="contact-location"
                    className="text-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mt-10 mb-6 text-resume-primary">Connect With Me</h3>
            
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/vishnu-putta-96549b123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-resume-light hover:bg-resume-accent/20 p-3 rounded-full text-resume-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/vishcodex" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-resume-light hover:bg-resume-accent/20 p-3 rounded-full text-resume-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://medium.com/@vishnuputta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-resume-light hover:bg-resume-accent/20 p-3 rounded-full text-resume-primary transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-resume-primary">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="Your email" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="Subject of your message" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Write your message here" 
                      rows={5} 
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-resume-primary hover:bg-resume-secondary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
