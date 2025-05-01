
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-12 pb-8 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="font-serif text-xl font-bold mb-4">Asim Alam Chowdhury</h3>
            <p className="text-slate-400 mb-4">
              Software Engineering student and aspiring researcher in AI, robotics, and interdisciplinary sciences.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="mailto:contact@asimalam.com" className="text-slate-400 hover:text-white transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-slate-300">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-slate-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/writing" className="text-slate-400 hover:text-white transition-colors">Writing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-slate-300">More</h4>
            <ul className="space-y-2">
              <li><Link to="/resume" className="text-slate-400 hover:text-white transition-colors">Resume</Link></li>
              <li><Link to="/worldview" className="text-slate-400 hover:text-white transition-colors">My Worldview</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>&copy; {currentYear} Asim Alam Chowdhury. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
