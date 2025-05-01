
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Writing', path: '/writing' },
    { name: 'Resume', path: '/resume' },
    { name: 'Worldview', path: '/worldview' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="font-serif text-xl md:text-2xl font-bold tracking-tight">
            Asim Alam
          </Link>
          
          {isMobile ? (
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          ) : (
            <nav className="flex gap-1">
              {navLinks.map((link) => (
                <Button key={link.name} asChild variant="ghost" size="sm">
                  <Link to={link.path}>{link.name}</Link>
                </Button>
              ))}
            </nav>
          )}
        </div>
        
        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-sm shadow-lg animate-fade-in">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Button 
                  key={link.name} 
                  asChild 
                  variant="ghost" 
                  className="justify-start rounded-none px-4 py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to={link.path}>{link.name}</Link>
                </Button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
