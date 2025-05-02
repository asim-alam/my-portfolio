
import { useEffect } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const articles = [
  {
    id: 1,
    title: "The Intersection of Ethics and Artificial Intelligence",
    excerpt: "Exploring the ethical considerations in developing advanced AI systems and the importance of responsible innovation.",
    date: "April 15, 2023",
    readTime: "8 min read",
    categories: ["Ethics", "AI"],
  },
  {
    id: 2,
    title: "Consciousness and Computation: A Philosophical Inquiry",
    excerpt: "An examination of theories of consciousness and their implications for artificial general intelligence and sentient machines.",
    date: "February 3, 2023",
    readTime: "12 min read",
    categories: ["Philosophy", "Consciousness", "AI"],
  },
  {
    id: 3,
    title: "The Future of Human-Robot Collaboration",
    excerpt: "How advances in robotics and human-computer interaction will reshape our workplaces and daily lives in the coming decades.",
    date: "December 10, 2022",
    readTime: "6 min read",
    categories: ["Robotics", "Future of Work"],
  },
  {
    id: 4,
    title: "Knowledge Representation in Intelligent Systems",
    excerpt: "An analysis of different approaches to representing and organizing knowledge in AI systems for more effective reasoning.",
    date: "October 22, 2022",
    readTime: "9 min read",
    categories: ["AI", "Knowledge Systems"],
  },
];

const upcomingBooks = [
  {
    id: 1,
    title: "The Intelligent Machine: Understanding AI from First Principles",
    description: "A comprehensive guide to understanding artificial intelligence from theoretical foundations to practical applications.",
    expectedRelease: "2023",
  },
  {
    id: 2,
    title: "Beyond Algorithm: The Philosophy of Computation and Mind",
    description: "An exploration of the philosophical questions surrounding computation, intelligence, and consciousness in both natural and artificial systems.",
    expectedRelease: "2024",
  },
];

const Writing = () => {
  useEffect(() => {
    document.title = "Writing | Asim Alam Chowdhury";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <Navbar />
      <ParticleBackground />
      
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 mt-8 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text animate-fade-in">Writing</h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 mb-6 rounded-full"></div>
          <p className="text-slate-300 text-center mb-8 max-w-2xl mx-auto animate-fade-in">
            A collection of my thoughts on science, philosophy, technology, and the 
            intersection of these fascinating disciplines.
          </p>
          
          {/* Blog Link Card */}
          <Card className="mb-12 bg-gradient-to-r from-slate-800/90 to-slate-800/50 border-white/5 overflow-hidden backdrop-blur-sm hover:shadow-lg transition-shadow animate-fade-in">
            <CardHeader className="pb-2">
              <CardTitle className="font-serif text-2xl text-white">Cosmic Bard Chronicles</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">Explore my dedicated blog where I share more in-depth thoughts, essays, and musings on various topics from technology to philosophy.</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-none">
                <a href="https://preview--cosmic-bard-chronicles-43.lovable.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Blog
                </a>
              </Button>
            </CardFooter>
          </Card>
          
          <section className="animate-fade-in" style={{ animationDelay: '150ms' }}>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">Articles & Essays</h2>
            <div className="space-y-6">
              {articles.map((article, index) => (
                <Card key={article.id} className="bg-slate-800/40 backdrop-blur-sm border-white/5 hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {article.categories.map((category) => (
                        <Badge key={category} variant="outline" className="text-xs bg-slate-700/50 border-slate-600">
                          {category}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="font-serif text-xl text-white">{article.title}</CardTitle>
                    <div className="text-sm text-slate-400 flex gap-3">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" className="pl-0 hover:pl-2 transition-all text-indigo-300 hover:text-indigo-200 hover:bg-slate-700/50">
                      <a href="#">
                        Read Full Article
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
          
          <section className="mt-16 animate-fade-in" style={{ animationDelay: '350ms' }}>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">Upcoming Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingBooks.map((book, index) => (
                <HoverCard key={book.id}>
                  <HoverCardTrigger asChild>
                    <Card className="bg-slate-800/40 backdrop-blur-sm border-white/5 hover:shadow-lg transition-shadow cursor-pointer hover:-translate-y-1 duration-300" style={{ animationDelay: `${(index + 5) * 100}ms` }}>
                      <CardHeader>
                        <CardTitle className="font-serif text-xl text-white">{book.title}</CardTitle>
                        <div className="text-sm text-slate-400">Expected: {book.expectedRelease}</div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300 line-clamp-3">{book.description}</p>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-slate-800 border-slate-700">
                    <div className="space-y-2">
                      <h4 className="font-serif text-lg font-semibold">{book.title}</h4>
                      <p className="text-sm text-slate-300">{book.description}</p>
                      <p className="text-xs text-slate-400">Coming in {book.expectedRelease}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Writing;
