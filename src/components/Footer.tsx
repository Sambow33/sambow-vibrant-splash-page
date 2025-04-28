
import { Button } from "@/components/ui/button";

interface FooterProps {
  currentLanguage: string;
}

const Footer = ({ currentLanguage }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className={`col-span-1 md:col-span-1 ${currentLanguage === 'ar' ? 'text-right' : ''}`}>
          <h3 className="text-2xl font-bold mb-4 text-sambow-purple">Sambow</h3>
          <p className="text-gray-300 mb-6">
            The next generation live streaming platform that connects creators with global audiences.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-sambow-purple transition-colors flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-sambow-purple transition-colors flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-sambow-purple transition-colors flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-sambow-purple transition-colors flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
            </a>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className={`${currentLanguage === 'ar' ? 'text-right' : ''}`}>
          <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
            <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
            <li><a href="#download" className="text-gray-300 hover:text-white transition-colors">Download</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        {/* Support */}
        <div className={`${currentLanguage === 'ar' ? 'text-right' : ''}`}>
          <h3 className="font-semibold mb-4 text-white">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Community Guidelines</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Safety Center</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Creator Resources</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Monetization</a></li>
          </ul>
        </div>
        
        {/* Newsletter */}
        <div className={`${currentLanguage === 'ar' ? 'text-right' : ''}`}>
          <h3 className="font-semibold mb-4 text-white">Stay Updated</h3>
          <p className="text-gray-300 mb-4">Subscribe to get the latest news and updates.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-gray-800 text-white px-4 py-2 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-sambow-purple"
            />
            <Button className="bg-sambow-purple hover:bg-sambow-dark-purple text-white">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Sambow. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
