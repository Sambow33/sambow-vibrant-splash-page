
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import LanguageSelector from './LanguageSelector';
import { cn } from '@/lib/utils';

interface NavbarProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const Navbar = ({ currentLanguage, onLanguageChange }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-sambow-purple">
            Sambow
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-gray-700 hover:text-sambow-purple transition-colors">About</a>
          <a href="#features" className="text-gray-700 hover:text-sambow-purple transition-colors">Features</a>
          <a href="#download" className="text-gray-700 hover:text-sambow-purple transition-colors">Download</a>
          <a href="#contact" className="text-gray-700 hover:text-sambow-purple transition-colors">Contact</a>
          <LanguageSelector currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
          <Button className="btn-primary">Start Live</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <LanguageSelector currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
          <button
            onClick={toggleMobileMenu}
            className="ml-2 p-2 text-gray-700 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
          mobileMenuOpen ? "max-h-60 py-3" : "max-h-0"
        )}
      >
        <div className="container-custom flex flex-col space-y-3">
          <a href="#about" className="text-gray-700 hover:text-sambow-purple transition-colors py-2">About</a>
          <a href="#features" className="text-gray-700 hover:text-sambow-purple transition-colors py-2">Features</a>
          <a href="#download" className="text-gray-700 hover:text-sambow-purple transition-colors py-2">Download</a>
          <a href="#contact" className="text-gray-700 hover:text-sambow-purple transition-colors py-2">Contact</a>
          <Button className="btn-primary">Start Live</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
