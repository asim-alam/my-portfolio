
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import QuoteDisplay from "@/components/QuoteDisplay";
import ParticleBackground from "@/components/ParticleBackground";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Asim Alam Chowdhury | Portfolio";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <Navbar />
      <ParticleBackground />
      
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">
                Asim Alam Chowdhury
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 font-serif italic">
              Software Engineer. AI Enthusiast. Aspiring Researcher.
            </p>
            <QuoteDisplay />
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
              <Button asChild className="px-6">
                <Link to="/about">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="px-6">
                <Link to="/projects">View My Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
            <div className="bg-slate-800/70 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg">
              <p className="text-slate-300 mb-6 leading-relaxed">
                I am a Software Engineering student at the University of Dhaka, passionate about the intersection of AI, robotics, and interdisciplinary sciences. My journey is fueled by curiosity, discipline, and a commitment to self-development.
              </p>
              <div className="text-center">
                <Button asChild variant="ghost">
                  <Link to="/about">Read More About My Journey <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
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
