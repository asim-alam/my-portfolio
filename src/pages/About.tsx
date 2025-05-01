
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import ParticleBackground from "@/components/ParticleBackground";

const About = () => {
  useEffect(() => {
    document.title = "About | Asim Alam Chowdhury";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <Navbar />
      <ParticleBackground />
      
      <main className="flex-grow container mx-auto px-4 md:px-6 py-24 mt-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h1>
          
          <div className="space-y-12">
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">My Journey</h2>
              <Card className="bg-slate-800/70 backdrop-blur-sm border-slate-700">
                <CardContent className="pt-6">
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    My academic journey began at the University of Dhaka, where I'm pursuing a degree in Software Engineering. From an early age, I've been fascinated by the intersection of technology, philosophy, and scientific exploration.
                  </p>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    What drives me is not just learning to code or build systems, but understanding the deeper principles that connect computer science to other disciplines. I believe that the most revolutionary advancements come from interdisciplinary approaches that combine diverse fields of knowledge.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Throughout my education, I've sought to merge theoretical understanding with practical application, constantly pushing the boundaries of my knowledge and skills. Each project and research endeavor represents a step in my ongoing quest to contribute meaningfully to the scientific community.
                  </p>
                </CardContent>
              </Card>
            </section>
            
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-slate-800/70 backdrop-blur-sm border-slate-700 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold mb-3">Curiosity</h3>
                    <p className="text-slate-300">
                      I embrace the unknown with enthusiasm, constantly asking questions and seeking new perspectives. Curiosity is the engine that drives innovation and discovery.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/70 backdrop-blur-sm border-slate-700 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold mb-3">Discipline</h3>
                    <p className="text-slate-300">
                      I believe in consistent, deliberate practice and structured approaches to learning. Great achievements require dedication and methodical effort.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/70 backdrop-blur-sm border-slate-700 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold mb-3">Self-Development</h3>
                    <p className="text-slate-300">
                      I am committed to continuous improvement—intellectually, technically, and personally. Each day presents an opportunity to become more capable and enlightened.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
            
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">Vision</h2>
              <Card className="bg-slate-800/70 backdrop-blur-sm border-slate-700">
                <CardContent className="pt-6">
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    I aspire to contribute to the advancement of AI and robotics research, with a focus on creating technologies that serve humanity and expand our understanding of intelligence and consciousness.
                  </p>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    My goal is to bridge the gap between theoretical computer science, practical engineering, and philosophical inquiry, finding innovative solutions to complex problems that have meaningful real-world applications.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Ultimately, I aim to be at the forefront of research that pushes the boundaries of what's possible, while maintaining a strong ethical framework that ensures technology serves as a force for good in society.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
