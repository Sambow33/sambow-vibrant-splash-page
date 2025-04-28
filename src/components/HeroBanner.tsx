
import { Button } from "@/components/ui/button";

interface HeroBannerProps {
  currentLanguage: string;
}

const HeroBanner = ({ currentLanguage }: HeroBannerProps) => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-sambow-purple/10 via-sambow-blue/5 to-sambow-pink/10">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-sambow-soft-purple/30 filter blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-sambow-soft-pink/30 filter blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-sambow-soft-blue/30 filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10 pt-16 md:pt-0 flex flex-col md:flex-row items-center">
        {/* Hero Content */}
        <div className={`w-full md:w-1/2 text-center md:text-left ${currentLanguage === 'ar' ? 'md:order-2' : ''}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="heading-gradient">
              Go Live. Connect. <br className="hidden md:block" />
              Earn Money.
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-lg mx-auto md:mx-0 animate-fade-in-delay-1">
            Join Sambow, the next generation live streaming platform where creators connect with global audiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-delay-2">
            <Button size="lg" className="btn-large btn-primary">
              Start Live Now
            </Button>
            <Button size="lg" className="btn-large btn-secondary">
              Download App
            </Button>
          </div>
          
          {/* Announcement banner */}
          <div className="mt-12 bg-sambow-purple/10 border border-sambow-purple/20 rounded-lg p-3 md:p-4 max-w-lg mx-auto md:mx-0 animate-pulse-light">
            <p className="text-sambow-dark-purple font-medium">
              🔥 New Feature: Multi-Host Rooms with up to 10 streamers live at once!
            </p>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className={`w-full md:w-1/2 mt-12 md:mt-0 ${currentLanguage === 'ar' ? 'md:order-1' : ''}`}>
          <div className="relative">
            {/* Phone mockup */}
            <div className="max-w-xs mx-auto md:max-w-sm animate-float">
              <div className="relative rounded-[3rem] border-8 border-black overflow-hidden shadow-2xl">
                {/* Phone screen */}
                <div className="aspect-[9/16] bg-gradient-to-br from-sambow-purple to-sambow-pink relative overflow-hidden">
                  {/* App UI mockup */}
                  <div className="absolute inset-0 flex flex-col">
                    {/* Status bar */}
                    <div className="h-8 bg-black/20 flex justify-between items-center px-4">
                      <span className="text-xs text-white">9:41</span>
                      <div className="flex space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M18 10c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6 6 2.7 6 6z"></path><path d="M10 3v2"></path><path d="M14 3v2"></path><path d="M10 17v4"></path><path d="M14 17v4"></path><path d="M3 10h2"></path><path d="M19 10h2"></path><path d="M3 6l1.5 1.5"></path><path d="M19.5 6l-1.5 1.5"></path><path d="M3 14l1.5-1.5"></path><path d="M19.5 14l-1.5-1.5"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path><line x1="12" x2="12" y1="6" y2="10"></line><line x1="12" x2="12" y1="14" y2="18"></line></svg>
                      </div>
                    </div>
                    
                    {/* Live stream content */}
                    <div className="flex-grow relative">
                      <div className="absolute inset-0 flex items-end">
                        {/* Viewer comments */}
                        <div className="w-full p-4 space-y-2">
                          <div className="flex items-center space-x-2 opacity-90">
                            <div className="w-6 h-6 rounded-full bg-blue-400"></div>
                            <div className="bg-black/30 rounded-full px-3 py-1 text-xs text-white">Amazing stream! 👏</div>
                          </div>
                          <div className="flex items-center space-x-2 opacity-90">
                            <div className="w-6 h-6 rounded-full bg-pink-400"></div>
                            <div className="bg-black/30 rounded-full px-3 py-1 text-xs text-white">How did you learn that?</div>
                          </div>
                          <div className="flex items-center space-x-2 opacity-90">
                            <div className="w-6 h-6 rounded-full bg-purple-400"></div>
                            <div className="bg-black/30 rounded-full px-3 py-1 text-xs text-white">Sent 500 coins 🪙🪙🪙</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Live indicator */}
                      <div className="absolute top-4 left-4 bg-red-500 text-white text-xs rounded-md px-2 py-1 flex items-center space-x-1">
                        <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
                        <span>LIVE</span>
                      </div>
                      
                      {/* Viewer count */}
                      <div className="absolute top-4 right-4 bg-black/30 text-white text-xs rounded-md px-2 py-1">
                        1.2K watching
                      </div>
                    </div>
                    
                    {/* Bottom actions */}
                    <div className="h-16 bg-black/20 flex items-center justify-around px-4">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl"></div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-4 w-16 h-16 bg-sambow-orange/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-sambow-blue/20 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sambow-purple"><path d="m6 9 6 6 6-6"></path></svg>
      </div>
    </div>
  );
};

export default HeroBanner;
