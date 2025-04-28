
import { useRef, useEffect } from 'react';

const AppShowcase = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!phoneRef.current) return;
      
      // Get phone element dimensions
      const rect = phoneRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate mouse position relative to center
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      // Calculate rotation (limit rotation to ±5 degrees)
      const rotateY = mouseX * 0.01;
      const rotateX = -mouseY * 0.01;
      
      // Apply transformation (limited to ±5 degrees)
      phoneRef.current.style.transform = `
        perspective(1000px) 
        rotateY(${Math.max(-5, Math.min(5, rotateY))}deg) 
        rotateX(${Math.max(-5, Math.min(5, rotateX))}deg)
      `;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* App Screenshots */}
          <div className="flex justify-center">
            <div 
              ref={phoneRef}
              className="relative transition-transform duration-300 ease-out"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Main Phone */}
              <div className="relative rounded-[3rem] border-[14px] border-black overflow-hidden shadow-2xl">
                <div className="aspect-[9/16] bg-gradient-to-br from-sambow-purple to-sambow-pink w-[250px]">
                  {/* App UI */}
                  <div className="absolute inset-0 flex flex-col">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-7 bg-black rounded-b-xl"></div>
                    
                    {/* App Content */}
                    <div className="pt-10 px-4 flex-1 flex flex-col">
                      {/* Grid of Live Streams */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="aspect-square rounded-lg bg-white/20 relative overflow-hidden">
                          <div className="absolute top-1 left-1 bg-red-500 text-white text-[10px] rounded px-1">LIVE</div>
                        </div>
                        <div className="aspect-square rounded-lg bg-white/20 relative overflow-hidden">
                          <div className="absolute top-1 left-1 bg-red-500 text-white text-[10px] rounded px-1">LIVE</div>
                        </div>
                        <div className="aspect-square rounded-lg bg-white/20 relative overflow-hidden">
                          <div className="absolute top-1 left-1 bg-red-500 text-white text-[10px] rounded px-1">LIVE</div>
                        </div>
                        <div className="aspect-square rounded-lg bg-white/20 relative overflow-hidden">
                          <div className="absolute top-1 left-1 bg-red-500 text-white text-[10px] rounded px-1">LIVE</div>
                        </div>
                      </div>
                      
                      {/* Popular Categories */}
                      <div className="mt-4">
                        <h3 className="text-white text-xs mb-2">Popular Categories</h3>
                        <div className="flex gap-2 overflow-x-auto pb-2">
                          <div className="flex-shrink-0 px-3 py-1 bg-white/20 rounded-full text-white text-[10px]">Music</div>
                          <div className="flex-shrink-0 px-3 py-1 bg-white/20 rounded-full text-white text-[10px]">Gaming</div>
                          <div className="flex-shrink-0 px-3 py-1 bg-white/20 rounded-full text-white text-[10px]">Talk Shows</div>
                          <div className="flex-shrink-0 px-3 py-1 bg-white/20 rounded-full text-white text-[10px]">Cooking</div>
                        </div>
                      </div>
                      
                      {/* Trending Streams */}
                      <div className="mt-4">
                        <h3 className="text-white text-xs mb-2">Trending</h3>
                        <div className="space-y-2">
                          <div className="bg-black/20 p-2 rounded-lg flex items-center gap-2">
                            <div className="w-8 h-8 bg-white/30 rounded-full"></div>
                            <div>
                              <p className="text-white text-[10px] font-medium">@username</p>
                              <p className="text-white/70 text-[8px]">1.2K viewers</p>
                            </div>
                          </div>
                          <div className="bg-black/20 p-2 rounded-lg flex items-center gap-2">
                            <div className="w-8 h-8 bg-white/30 rounded-full"></div>
                            <div>
                              <p className="text-white text-[10px] font-medium">@username</p>
                              <p className="text-white/70 text-[8px]">845 viewers</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Navigation */}
                    <div className="h-16 bg-black/30 flex items-center justify-around px-4">
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        </div>
                        <span className="text-white text-[8px] mt-1">Home</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><circle cx="12" cy="10" r="3"></circle></svg>
                        </div>
                        <span className="text-white text-[8px] mt-1">Profile</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 -mt-5 rounded-full bg-sambow-pink flex items-center justify-center shadow-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                        </div>
                        <span className="text-white text-[8px] mt-1">Go Live</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 5-10 10L2 5"></path><path d="M14 16H5a2 2 0 0 1-2-2V5"></path></svg>
                        </div>
                        <span className="text-white text-[8px] mt-1">Inbox</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        </div>
                        <span className="text-white text-[8px] mt-1">Settings</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Second Phone (slightly behind) */}
              <div className="absolute -bottom-10 -right-16 rounded-[2.5rem] border-[10px] border-black overflow-hidden shadow-xl w-[180px] rotate-12 z-[-1]">
                <div className="aspect-[9/16] bg-gradient-to-br from-sambow-blue to-sambow-pink">
                  <div className="absolute inset-0 flex flex-col">
                    {/* Live stream UI mockup */}
                    <div className="absolute top-1 left-1 bg-red-500 text-white text-[8px] rounded-sm px-1 flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                      <span>LIVE</span>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-white/30 rounded-full"></div>
                        <div>
                          <p className="text-white text-[8px] font-medium">@username</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Third Phone (different angle) */}
              <div className="absolute -bottom-6 -left-16 rounded-[2rem] border-[10px] border-black overflow-hidden shadow-xl w-[150px] -rotate-12 z-[-1]">
                <div className="aspect-[9/16] bg-gradient-to-br from-sambow-orange to-sambow-pink">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating emojis and reactions */}
              <div className="absolute top-20 -right-6 w-6 h-6 animate-float" style={{ animationDelay: '0.5s' }}>
                💖
              </div>
              <div className="absolute top-40 -right-8 w-6 h-6 animate-float" style={{ animationDelay: '1.5s' }}>
                🎁
              </div>
              <div className="absolute bottom-32 -left-6 w-6 h-6 animate-float" style={{ animationDelay: '1s' }}>
                👑
              </div>
              <div className="absolute top-16 -left-4 w-6 h-6 animate-float" style={{ animationDelay: '0.2s' }}>
                ✨
              </div>
            </div>
          </div>
          
          {/* Features list */}
          <div>
            <h3 className="text-2xl font-bold mb-6 heading-gradient">Experience The App</h3>
            <ul className="space-y-5">
              <li className="flex gap-4 items-start">
                <div className="p-2 bg-sambow-soft-purple rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sambow-purple"><path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10Z"></path><path d="m15 10-4 4"></path><path d="m9 10 4 4"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Ultra Low Latency</h4>
                  <p className="text-gray-600">Stream with just 1-2 seconds of delay for real-time interaction with your audience.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="p-2 bg-sambow-soft-pink rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sambow-pink"><path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4c1.9 0 3.5-1.3 3.9-3.1"></path><path d="M12 8V4"></path><path d="M12 16v4"></path><path d="M16 4.9C17.2 5.5 18 6.7 18 8c0 0 0 .5-.1.5"></path><path d="M5 8c0-1.3.8-2.4 1.9-3"></path><path d="M18.3 11.5c.4 1.3.2 2.7-.6 3.8"></path><path d="M5.2 15.8c-.7-1.1-.9-2.4-.5-3.6"></path><path d="m16 19 2 2 4-4"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">HD Quality</h4>
                  <p className="text-gray-600">Broadcast and watch in crystal clear 1080p resolution with dynamic adjustment.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="p-2 bg-sambow-soft-blue rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sambow-blue"><path d="M12 4a4 4 0 0 1 4 4 7 7 0 0 1-8 7"></path><path d="M19 17v.8a4 4 0 0 1-5 3.86c-.71-.18-1.41-.51-1.94-1.05"></path><path d="M5 17v.8a4 4 0 0 0 5 3.87c.7-.19 1.39-.51 1.93-1.05"></path><path d="M12 11V4"></path><path d="m2 2 20 20"></path><path d="M5 7v.8a4 4 0 0 0 5 3.87c.7-.19 1.39-.51 1.93-1.05"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Live Filters & Effects</h4>
                  <p className="text-gray-600">Enhance your streams with beautiful filters, AR effects, and virtual backgrounds.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="p-2 bg-sambow-soft-purple rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sambow-orange"><path d="M12 14v3"></path><path d="M10 7v4"></path><path d="M14 7v4"></path><circle cx="12" cy="6" r="1"></circle><path d="M5 8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v10a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z"></path><path d="M9 17h6"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Gifts & Virtual Items</h4>
                  <p className="text-gray-600">Viewers can send virtual gifts that convert to real earnings for creators.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
