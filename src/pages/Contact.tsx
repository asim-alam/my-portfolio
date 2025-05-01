
import { useEffect } from "react";
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Asim Alam Chowdhury";
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // In a real app, you'd send the form data to a server
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <Navbar />
      <ParticleBackground />
      
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 mt-8 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text animate-fade-in">Contact Me</h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 mb-6 rounded-full"></div>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto animate-fade-in">
            Have a question or want to work together? Feel free to reach out through 
            the form below or through my social channels.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <Card className="bg-slate-800/40 backdrop-blur-sm border-white/5 shadow-xl">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">Send a Message</CardTitle>
                  <CardDescription className="text-slate-400">
                    I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input 
                          id="name" 
                          placeholder="Your name" 
                          required 
                          className="bg-slate-700/50 border-slate-600 focus-visible:ring-indigo-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Your email address" 
                          required
                          className="bg-slate-700/50 border-slate-600 focus-visible:ring-indigo-500"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="Subject of your message" 
                        required
                        className="bg-slate-700/50 border-slate-600 focus-visible:ring-indigo-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <textarea 
                        id="message" 
                        rows={5} 
                        placeholder="Your message" 
                        required
                        className="w-full rounded-md bg-slate-700/50 border border-slate-600 p-3 text-slate-100 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-none">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Card className="bg-slate-800/40 backdrop-blur-sm border-white/5 shadow-xl">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">Connect</CardTitle>
                  <CardDescription className="text-slate-400">
                    Find me on these platforms
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 group hover:-translate-y-1 transition-transform duration-300">
                    <Mail className="h-5 w-5 text-indigo-400" />
                    <a href="mailto:contact@asimalam.com" className="hover:text-indigo-300 transition-colors">contact@asimalam.com</a>
                  </div>
                  <div className="flex items-center space-x-3 group hover:-translate-y-1 transition-transform duration-300">
                    <Github className="h-5 w-5 text-indigo-400" />
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors">github.com/asimalam</a>
                  </div>
                  <div className="flex items-center space-x-3 group hover:-translate-y-1 transition-transform duration-300">
                    <Linkedin className="h-5 w-5 text-indigo-400" />
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors">linkedin.com/in/asimalam</a>
                  </div>
                  <div className="flex items-center space-x-3 group hover:-translate-y-1 transition-transform duration-300">
                    <Twitter className="h-5 w-5 text-indigo-400" />
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors">twitter.com/asimalam</a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
