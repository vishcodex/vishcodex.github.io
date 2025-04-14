
import React from 'react';
import { Badge } from "@/components/ui/badge";

const languages = ["Mojo", "Python", "Scala", "Java", "SQL", "Typescript", "Shell scripting"];
const techStack = [
  "OpenAI", "OpenRouter", "Cline", "Model Context Protocol (MCP)", "AI Agents", "LangChain", "LangGraph",
  "PydanticAI", "CrewAI", "DSPy", "TextGrad", "AdalFlow", "Fine-tuning", "Retrieval Augmentation (RAG)",
  "Vectorized DBs", "GraphQL", "NLTK", "Spacy", "BERT", "Transformers", "Neo4J", "Hugging Face",
  "PyAnnotate", "FastAPI", "WebSocket", "AWS Stack", "GCP Stack", "Azure Databricks", "Cloudera Stack",
  "Kafka", "Delta Lake", "Apache Iceberg", "Airflow", "Control-M", "React", "Spring Boot", "Git",
  "Bitbucket", "Kubernetes", "Docker", "PyCharm", "IntelliJ", "VS Code", "Apache Spark", "Hadoop",
  "StreamSets", "Apache NiFi", "MongoDB"
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Technical Skills</h2>
        
        <div className="mt-12 space-y-8">
          {/* Languages Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-resume-primary">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm font-medium">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tech Stack Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-resume-primary">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm font-medium">
                   {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
