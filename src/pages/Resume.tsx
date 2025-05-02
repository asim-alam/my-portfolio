
import { useEffect } from "react";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const Resume = () => {
  useEffect(() => {
    document.title = "Resume | Asim Alam Chowdhury";
  }, []);

  // Function to handle resume download
  const handleDownload = () => {
    // In a real scenario, this would be a link to an actual PDF file
    // For now, we'll just show a toast notification
    toast({
      title: "Resume Downloaded",
      description: "Thank you for your interest in my resume!",
      duration: 3000,
    });
    
    // Mock download - in a real app, you would use something like this:
    // window.location.href = "/path-to-your-resume.pdf";
    
    // For demo purposes, let's create a simple text file to download
    const element = document.createElement("a");
    const file = new Blob(
      [
        "Asim Alam Chowdhury\nSoftware Engineer | AI Researcher\n\nEducation:\n- University of Dhaka, BSc in Software Engineering (2020-Present)\n- National College, Higher Secondary Education (2018-2020)\n\nSkills:\n- Programming: Python, C++, JavaScript, TypeScript\n- Technologies: TensorFlow, PyTorch, React, Node.js\n- Subject Knowledge: Machine Learning, Data Structures, Algorithms"
      ],
      { type: "text/plain" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "asim-alam-chowdhury-resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <Navbar />
      <ParticleBackground />
      
      <main className="flex-grow container mx-auto px-4 md:px-6 py-24 mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text">Resume</h1>
            <div className="flex gap-3">
              <Button variant="outline" className="bg-slate-800/60 border-white/10 hover:bg-slate-700/60" onClick={handleDownload}>
                <FileText className="mr-2 h-4 w-4" />
                View as PDF
              </Button>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-none" onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="space-y-10">
            {/* Education Section */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">Education</h2>
              <Card className="bg-slate-800/70 backdrop-blur-sm border-slate-700">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-lg">University of Dhaka</h3>
                          <p className="text-slate-300">BSc in Software Engineering</p>
                        </div>
                        <span className="text-slate-400">2020 - Present</span>
                      </div>
                      <p className="text-slate-400">
                        Specialization in Artificial Intelligence and Machine Learning. 
                        GPA: 3.92/4.00
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-lg">National College</h3>
                          <p className="text-slate-300">Higher Secondary Education</p>
                        </div>
                        <span className="text-slate-400">2018 - 2020</span>
                      </div>
                      <p className="text-slate-400">
                        Science Group with Mathematics, Physics, and Chemistry.
                        GPA: 5.00/5.00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
            
            {/* Teaching Experience */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">Teaching Experience</h2>
              <Card className="bg-slate-800/70 backdrop-blur-sm border-slate-700">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-lg">Teaching Assistant</h3>
                          <p className="text-slate-300">University of Dhaka</p>
                        </div>
                        <span className="text-slate-400">2022 - Present</span>
                      </div>
                      <p className="text-slate-400 mb-2">
                        Assisting in courses related to Data Structures, Algorithms, and Introduction to AI.
                      </p>
                      <ul className="list-disc pl-5 text-slate-400 space-y-1">
                        <li>Conducted weekly lab sessions for 30+ undergraduate students</li>
                        <li>Designed programming assignments and evaluation criteria</li>
                        <li>Provided one-on-one mentoring to struggling students</li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-lg">Peer Tutor</h3>
                          <p className="text-slate-300">University Learning Center</p>
                        </div>
                        <span className="text-slate-400">2021 - 2022</span>
                      </div>
                      <p className="text-slate-400 mb-2">
                        Provided tutoring in mathematics and programming fundamentals to first-year students.
                      </p>
                      <ul className="list-disc pl-5 text-slate-400 space-y-1">
                        <li>Helped students understand complex mathematical concepts</li>
                        <li>Guided beginners through programming challenges</li>
                        <li>Received excellent feedback for clear explanations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
            
            {/* Skills Section */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-slate-800/70 backdrop-blur-sm border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">Programming Languages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "C++", "JavaScript", "TypeScript", "Java", "MATLAB"].map((skill) => (
                        <Badge key={skill} className="bg-slate-700/50 hover:bg-slate-700 transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/70 backdrop-blur-sm border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">Technologies & Frameworks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["TensorFlow", "PyTorch", "React", "Node.js", "OpenCV", "ROS"].map((skill) => (
                        <Badge key={skill} className="bg-slate-700/50 hover:bg-slate-700 transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/70 backdrop-blur-sm border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">Subject Knowledge</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Machine Learning", "Data Structures", "Algorithms", "Computer Vision", "NLP", "Robotics"].map((skill) => (
                        <Badge key={skill} className="bg-slate-700/50 hover:bg-slate-700 transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/70 backdrop-blur-sm border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">Soft Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Research", "Technical Writing", "Public Speaking", "Problem Solving", "Critical Thinking", "Team Leadership"].map((skill) => (
                        <Badge key={skill} className="bg-slate-700/50 hover:bg-slate-700 transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
            
            {/* Achievements Section */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">Achievements</h2>
              <Card className="bg-slate-800/70 backdrop-blur-sm border-slate-700">
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <div>
                        <h3 className="font-bold">National Programming Contest Finalist</h3>
                        <p className="text-slate-400">Among top 10 finalists in the National Collegiate Programming Contest, 2022</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <div>
                        <h3 className="font-bold">Research Grant Recipient</h3>
                        <p className="text-slate-400">Received university grant for research on "Neural Models for Robotic Control Systems", 2023</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <div>
                        <h3 className="font-bold">Dean's List</h3>
                        <p className="text-slate-400">Consistently maintained position on the Dean's List for academic excellence, 2020-present</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <div>
                        <h3 className="font-bold">Best Paper Award</h3>
                        <p className="text-slate-400">Received Best Undergraduate Paper Award at Regional Computer Science Conference, 2022</p>
                      </div>
                    </li>
                  </ul>
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

export default Resume;
