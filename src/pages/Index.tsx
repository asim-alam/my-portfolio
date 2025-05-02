import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, Twitter, Code, BookOpen, Rocket, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import QuoteDisplay from "@/components/QuoteDisplay";
import ParticleBackground from "@/components/ParticleBackground";
import Footer from "@/components/Footer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FloatingBadge = ({ text, className }: { text: string; className: string }) => (
  <div className={`absolute animate-float ${className}`}>
    <Badge variant="outline" className="bg-gradient-to-r from-indigo-500/80 to-purple-500/80 text-white py-1 px-3 text-sm backdrop-blur-sm border-none shadow-lg">
      {text}
    </Badge>
  </div>
);

// Sample blog posts for preview
const recentBlogPosts = [
  {
    title: "The Ethics of AI Development",
    excerpt: "Exploring the moral implications of creating increasingly advanced artificial intelligence systems.",
    date: "April 28, 2025",
    imageUrl: "/lovable-uploads/b7d8144e-00b5-4b18-83d9-64e5dafa01d8.png"
  },
  {
    title: "Quantum Computing: A New Era",
    excerpt: "Understanding the fundamentals of quantum computing and its potential to revolutionize technology.",
    date: "April 22, 2025",
    imageUrl: "/placeholder.svg"
  }
];

const Index = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    document.title = "Asim Alam Chowdhury | Portfolio";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <Navbar />
      <ParticleBackground />
      
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-20 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text">
                  Asim Alam Chowdhury
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mb-6 rounded-full"></div>
              <p className="text-xl md:text-2xl text-slate-300 mb-6">
                Software Engineer. AI Enthusiast. Aspiring Researcher.
              </p>
              <QuoteDisplay />
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-none">
                  <Link to="/about">
                    Learn More About Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10">
                  <Link to="/projects">View My Projects</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2 mx-auto lg:mx-0 animate-scale-in">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden backdrop-blur-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 animate-pulse rounded-full"></div>
                <div className="absolute inset-2 bg-slate-800/50 backdrop-blur-md rounded-full overflow-hidden p-1">
                  <div className="relative w-full h-full overflow-hidden rounded-full">
                    <Avatar className="w-full h-full">
                      <AvatarImage 
                        src="/lovable-uploads/b7d8144e-00b5-4b18-83d9-64e5dafa01d8.png" 
                        alt="Asim Alam Chowdhury"
                        className="object-cover rounded-full"
                        onLoad={() => setIsImageLoaded(true)}
                      />
                      <AvatarFallback className="bg-slate-700 text-xl">AAC</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
              
              {/* Floating skill badges */}
              <FloatingBadge text="AI Researcher" className="-top-4 right-5" />
              <FloatingBadge text="Software Engineer" className="top-1/4 -right-12" />
              <FloatingBadge text="Robotics Enthusiast" className="bottom-1/4 -right-16" />
              <FloatingBadge text="C++ Developer" className="-bottom-4 right-10" />
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2 text-center bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">About Me</h2>
            <div className="h-1 w-16 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 mb-8 rounded-full"></div>
            <Card className="bg-slate-800/40 backdrop-blur-lg border-white/5 shadow-xl overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <p className="text-slate-300 mb-6 leading-relaxed">
                  I am a Software Engineering student at the University of Dhaka, passionate about the intersection of AI, robotics, and interdisciplinary sciences. My journey is fueled by curiosity, discipline, and a commitment to self-development.
                </p>
                <div className="text-center">
                  <Button asChild variant="ghost" className="text-indigo-300 hover:text-indigo-200 hover:bg-slate-700/50">
                    <Link to="/about">Read More About My Journey <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2 text-center bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">Cosmic Bard Chronicles</h2>
            <div className="h-1 w-16 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 mb-6 rounded-full"></div>
            
            <Card className="bg-slate-800/40 backdrop-blur-lg border-white/5 shadow-xl overflow-hidden mb-8">
              <CardContent className="p-6 md:p-8">
                <p className="text-slate-300 mb-6 leading-relaxed text-center">
                  Explore my blog where I share thoughts on philosophy, science, and technology.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {recentBlogPosts.map((post, index) => (
                    <Card key={index} className="bg-slate-800/60 border-white/5 hover:border-white/10 transition-all hover:-translate-y-1">
                      <div className="relative h-40 overflow-hidden rounded-t-lg">
                        <img 
                          src={post.imageUrl} 
                          alt={post.title} 
                          className="object-cover w-full h-full" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                        <div className="absolute bottom-2 left-4 text-xs text-slate-300">{post.date}</div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-serif font-bold text-lg mb-2">{post.title}</h3>
                        <p className="text-slate-300 text-sm line-clamp-2">{post.excerpt}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-center">
                  <Button asChild className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-none">
                    <a href="https://preview--cosmic-bard-chronicles-43.lovable.app/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit My Blog
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Sections */}
        <section className="py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { 
                title: "Projects", 
                description: "Explore my technical work in AI, robotics and web development",
                icon: <Code className="h-8 w-8 mb-4 text-indigo-400" />,
                link: "/projects"
              },
              { 
                title: "Articles", 
                description: "Read my thoughts on philosophy, science and technology",
                icon: <BookOpen className="h-8 w-8 mb-4 text-purple-400" />,
                link: "/writing"
              },
              { 
                title: "Vision", 
                description: "Learn about my worldview and aspirations for the future",
                icon: <Rocket className="h-8 w-8 mb-4 text-pink-400" />,
                link: "/worldview"
              }
            ].map((item, i) => (
              <Card key={i} className="bg-slate-800/40 backdrop-blur-lg border-white/5 hover:border-white/10 transition-all hover:-translate-y-1 hover:shadow-lg group">
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="p-3 rounded-full bg-slate-700/50 backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-slate-300 mb-4">{item.description}</p>
                  <Button asChild variant="ghost" className="text-indigo-300 hover:text-indigo-200 group-hover:bg-slate-700/50">
                    <Link to={item.link}>
                      Explore <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Connect Section */}
        <section className="py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-indigo-400 text-transparent bg-clip-text">Let's Connect</h2>
            <div className="h-1 w-16 mx-auto bg-gradient-to-r from-pink-500 to-indigo-500 mb-8 rounded-full"></div>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon" className="rounded-full bg-slate-800/60 backdrop-blur-md border-white/10 hover:bg-slate-700/60 hover:border-white/20 transition-all hover:-translate-y-1" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-slate-800/60 backdrop-blur-md border-white/10 hover:bg-slate-700/60 hover:border-white/20 transition-all hover:-translate-y-1" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-slate-800/60 backdrop-blur-md border-white/10 hover:bg-slate-700/60 hover:border-white/20 transition-all hover:-translate-y-1" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-slate-800/60 backdrop-blur-md border-white/10 hover:bg-slate-700/60 hover:border-white/20 transition-all hover:-translate-y-1" asChild>
                <a href="mailto:contact@asimchowdhury.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
