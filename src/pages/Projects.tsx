
import { useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

// Sample project data - this would be replaced with real projects
const projects = [
  {
    id: 1,
    title: "Neural Network Visualization",
    description: "An interactive tool for visualizing neural network architectures and training processes, helping researchers understand the inner workings of deep learning models.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tags: ["AI", "JavaScript", "Data Visualization"],
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Autonomous Robot Navigation System",
    description: "A robust navigation algorithm for autonomous robots in dynamic environments, combining computer vision and reinforcement learning techniques.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    tags: ["Robotics", "C++", "Computer Vision"],
    githubUrl: "https://github.com",
    liveUrl: null,
  },
  {
    id: 3,
    title: "Scientific Knowledge Graph",
    description: "A knowledge graph connecting research papers, concepts, and researchers across disciplines to discover hidden connections and research opportunities.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    tags: ["Graph Theory", "NLP", "Python"],
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Philosophical Inquiry AI",
    description: "An experimental AI system designed to engage in philosophical discussions and help users explore complex ethical and existential questions.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
    tags: ["AI", "NLP", "Ethics"],
    githubUrl: "https://github.com",
    liveUrl: null,
  },
];

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Asim Alam Chowdhury";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <Navbar />
      <ParticleBackground />
      
      <main className="flex-grow container mx-auto px-4 md:px-6 py-24 mt-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-center">Projects</h1>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            A collection of my technical and interdisciplinary work in AI, robotics, 
            and computer science, showcasing my approach to solving complex problems.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="bg-slate-800/70 backdrop-blur-sm border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif">{project.title}</CardTitle>
                  <CardDescription className="text-slate-400">
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs bg-slate-700/50 border-slate-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{project.description}</p>
                </CardContent>
                <CardFooter className="flex gap-3">
                  <Button asChild size="sm" variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button asChild size="sm">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
