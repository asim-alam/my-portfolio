
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
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <Navbar />
      <ParticleBackground />
      
      <main className="flex-grow container mx-auto px-4 md:px-6 py-24 mt-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-center">Contact Me</h1>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out through 
            the form below or through my social channels.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <Card className="bg-slate-800/70 backdrop-blur-sm border-slate-700">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Send a Message</CardTitle>
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
                          className="bg-slate-700/50 border-slate-600 focus-visible:ring-slate-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Your email address" 
                          required
                          className="bg-slate-700/50 border-slate-600 focus-visible:ring-slate-500"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="Subject of your message" 
                        required
                        className="bg-slate-700/50 border-slate-600 focus-visible:ring-slate-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <textarea 
                        id="message" 
                        rows={5} 
                        placeholder="Your message" 
                        required
                        className="w-full rounded-md bg-slate-700/50 border border-slate-600 p-3 text-slate-100 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="bg-slate-800/70 backdrop-blur-sm border-slate-700">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Connect</CardTitle>
                  <CardDescription className="text-slate-400">
                    Find me on these platforms
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-slate-400" />
                    <a href="mailto:contact@asimalam.com" className="hover:underline">contact@asimalam.com</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="h-5 w-5 text-slate-400" />
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/asimalam</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="h-5 w-5 text-slate-400" />
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/asimalam</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Twitter className="h-5 w-5 text-slate-400" />
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">twitter.com/asimalam</a>
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
