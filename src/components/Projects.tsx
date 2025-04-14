
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from 'lucide-react';
import EditableContent from './EditableContent';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12"> {/* Adjusted grid columns */}
          {/* Project 1: Post-Call Wrap-Up Automation */}
          <Card className="overflow-hidden group transition-all hover:shadow-lg">
            <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src="/placeholder.svg"
                alt="Post-Call Wrap-Up Automation"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>
                <EditableContent
                  initialContent="Post-Call Wrap-Up Automation"
                  contentType="title"
                  id="project-title-1"
                  className="text-xl"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4"> {/* Adjusted padding */}
              <EditableContent
                initialContent="Streaming real-time events and using OpenAI for multilingual summarization to streamline agent documentation."
                contentType="paragraph"
                id="project-description-1"
                className="text-gray-600 dark:text-gray-300"
              />
            </CardContent>
            {/* Removed CardFooter */}
          </Card>
          
          {/* Project 2: SmartBot Agent */}
          <Card className="overflow-hidden group transition-all hover:shadow-lg">
            <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src="/placeholder.svg"
                alt="SmartBot Agent"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>
                <EditableContent
                  initialContent="SmartBot Agent"
                  contentType="title"
                  id="project-title-2"
                  className="text-xl"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4"> {/* Adjusted padding */}
              <EditableContent
                initialContent="Built an LLM-based assistant for resolving frontline benefit and claims queries via RAG and API integration."
                contentType="paragraph"
                id="project-description-2"
                className="text-gray-600 dark:text-gray-300"
              />
            </CardContent>
             {/* Removed CardFooter */}
          </Card>
          
          {/* Project 3: Voice-to-Insight */}
          <Card className="overflow-hidden group transition-all hover:shadow-lg">
            <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src="/placeholder.svg"
                alt="Voice-to-Insight"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>
                <EditableContent
                  initialContent="Voice-to-Insight"
                  contentType="title"
                  id="project-title-3"
                  className="text-xl"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4"> {/* Adjusted padding */}
              <EditableContent
                initialContent="Converted large-scale customer call audio into actionable transcripts and sentiment insights using OpenAI Whisper and Annotate."
                contentType="paragraph"
                id="project-description-3"
                className="text-gray-600 dark:text-gray-300"
              />
            </CardContent>
             {/* Removed CardFooter */}
          </Card>

          {/* Project 4: Smart Utilization Management */}
          <Card className="overflow-hidden group transition-all hover:shadow-lg">
            <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src="/placeholder.svg"
                alt="Smart Utilization Management"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>
                <EditableContent
                  initialContent="Smart Utilization Management"
                  contentType="title"
                  id="project-title-4"
                  className="text-xl"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4"> {/* Adjusted padding */}
              <EditableContent
                initialContent="Designed & Operationalized a real-time ML pipeline using real-time API, Feast SDK for feature stores, and Kubernetes-deployed APIs to predict PA outcomes."
                contentType="paragraph"
                id="project-description-4"
                className="text-gray-600 dark:text-gray-300"
              />
            </CardContent>
             {/* Removed CardFooter */}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
