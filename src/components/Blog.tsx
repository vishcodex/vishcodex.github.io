
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import EditableContent from './EditableContent';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="section-heading">Upcoming Tech Insights</h2>
          <Button variant="outline" className="hidden md:flex items-center gap-2">
            All Posts <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="overflow-hidden">
            <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
              <img 
                src="/placeholder.svg" 
                alt="Blog post 1" 
                className="w-full h-full object-cover" 
              />
            </div>
            <CardHeader>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                <EditableContent 
                  initialContent="Coming Soon" 
                  contentType="text" 
                  id="blog-date-1"
                />
              </div>
              <h3 className="text-xl font-semibold text-resume-primary">
                <EditableContent 
                  initialContent="Exploring Latest AI and Tech Innovations" 
                  contentType="title" 
                  id="blog-title-1"
                />
              </h3>
            </CardHeader>
            <CardContent>
              <EditableContent 
                initialContent="Dive into the cutting-edge world of technology, exploring emerging trends in AI, machine learning, and innovative tech solutions that are reshaping industries." 
                contentType="paragraph" 
                id="blog-excerpt-1"
                className="text-gray-600 dark:text-gray-300"
              />
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="text-resume-secondary hover:text-resume-primary">Upcoming Post</Button>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
              <img 
                src="/placeholder.svg" 
                alt="Blog post 2" 
                className="w-full h-full object-cover" 
              />
            </div>
            <CardHeader>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                <EditableContent 
                  initialContent="Coming Soon" 
                  contentType="text" 
                  id="blog-date-2"
                />
              </div>
              <h3 className="text-xl font-semibold text-resume-primary">
                <EditableContent 
                  initialContent="MLOps and Data Engineering Insights" 
                  contentType="title" 
                  id="blog-title-2"
                />
              </h3>
            </CardHeader>
            <CardContent>
              <EditableContent 
                initialContent="Deep insights into the evolving landscape of Machine Learning Operations, data engineering best practices, and strategies for building scalable, efficient ML pipelines." 
                contentType="paragraph" 
                id="blog-excerpt-2"
                className="text-gray-600 dark:text-gray-300"
              />
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="text-resume-secondary hover:text-resume-primary">Upcoming Post</Button>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
              <img 
                src="/placeholder.svg" 
                alt="Blog post 3" 
                className="w-full h-full object-cover" 
              />
            </div>
            <CardHeader>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                <EditableContent 
                  initialContent="Coming Soon" 
                  contentType="text" 
                  id="blog-date-3"
                />
              </div>
              <h3 className="text-xl font-semibold text-resume-primary">
                <EditableContent 
                  initialContent="Emerging Technologies and Future Trends" 
                  contentType="title" 
                  id="blog-title-3"
                />
              </h3>
            </CardHeader>
            <CardContent>
              <EditableContent 
                initialContent="Exploring the latest technological frontiers, from AI advancements to innovative tech solutions that are set to transform industries and reshape our understanding of technology." 
                contentType="paragraph" 
                id="blog-excerpt-3"
                className="text-gray-600 dark:text-gray-300"
              />
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="text-resume-secondary hover:text-resume-primary">Upcoming Post</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-8 flex justify-center md:hidden">
          <Button variant="outline" className="flex items-center gap-2">
            All Posts <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;

