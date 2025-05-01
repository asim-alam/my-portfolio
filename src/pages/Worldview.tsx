
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const Worldview = () => {
  useEffect(() => {
    document.title = "My Worldview | Asim Alam Chowdhury";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <Navbar />
      <ParticleBackground />
      
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 mt-8 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text animate-fade-in">My Worldview</h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 mb-6 rounded-full"></div>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto animate-fade-in">
            My perspectives on science, knowledge, human nature, and the pursuit of meaning.
          </p>
          
          <div className="space-y-10">
            <section className="animate-fade-in">
              <Card className="bg-slate-800/40 backdrop-blur-sm border-white/5 shadow-xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">On Science and Knowledge</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      I view science as our most reliable method for understanding reality, but I recognize its 
                      inherent limitations. Scientific knowledge is always provisional, subject to revision with 
                      new evidence and better theories.
                    </p>
                    <p>
                      The scientific endeavor is not merely about accumulating facts, but about constructing 
                      coherent frameworks that explain phenomena and make successful predictions. The most valuable 
                      scientific theories are those that unify seemingly disparate phenomena under common principles.
                    </p>
                    <p>
                      I believe that interdisciplinary approaches are essential for tackling the most complex 
                      problems. The boundaries between fields like computer science, neuroscience, physics, and 
                      philosophy are often artificial constructs that can inhibit progress. The most revolutionary 
                      insights often emerge at the intersections of disciplines.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
            
            <section className="animate-fade-in" style={{ animationDelay: '150ms' }}>
              <Card className="bg-slate-800/40 backdrop-blur-sm border-white/5 shadow-xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">On Technology and Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      Technology is neither inherently good nor evil, but a powerful tool that amplifies human 
                      intentions and capabilities. The responsibility lies with us to direct technological progress 
                      toward beneficial ends.
                    </p>
                    <p>
                      I believe in cautious optimism about technological advancement. We should enthusiastically 
                      pursue innovations that can solve humanity's greatest challenges while carefully considering 
                      unintended consequences and ethical implications.
                    </p>
                    <p>
                      The development of artificial intelligence represents perhaps our most significant 
                      technological frontier. As we create increasingly capable AI systems, we must ensure they 
                      align with human values and contribute positively to human flourishing rather than undermining it.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
            
            <section className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Card className="bg-slate-800/40 backdrop-blur-sm border-white/5 shadow-xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">On Human Nature and Potential</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      I believe that humans have remarkable capacities for both reason and irrationality, cooperation 
                      and conflict, selfishness and altruism. Our nature is complex and multifaceted, shaped by both 
                      biology and culture.
                    </p>
                    <p>
                      The human mind possesses extraordinary creative potential. Through education, discipline, and 
                      the right environment, we can develop our intellectual and moral capacities far beyond what might 
                      initially seem possible.
                    </p>
                    <p>
                      I am convinced that much of human progress comes from cultivating virtues like curiosity, 
                      intellectual humility, perseverance, and compassion. These qualities enable us to overcome 
                      cognitive biases, learn from mistakes, and cooperate effectively with others.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
            
            <section className="animate-fade-in" style={{ animationDelay: '450ms' }}>
              <Card className="bg-slate-800/40 backdrop-blur-sm border-white/5 shadow-xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">On Personal Growth and Meaning</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      I see personal growth as an ongoing process of expanding one's understanding, capabilities, and 
                      perspective. This requires a willingness to challenge one's own assumptions and venture outside 
                      of comfort zones.
                    </p>
                    <p>
                      Meaning in life emerges from pursuing worthy goals, forming deep connections with others, and 
                      contributing to something larger than oneself. The pursuit of knowledge and creation of valuable 
                      works are among the many paths to a meaningful existence.
                    </p>
                    <p>
                      I believe in maintaining a balance between ambitious goals and present contentment. While striving 
                      for excellence and impact, we must also cultivate gratitude and appreciation for the journey itself, 
                      including its inevitable setbacks and challenges.
                    </p>
                  </div>
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

export default Worldview;
