
import { useState } from "react";
import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";
import FeatureCard from "@/components/FeatureCard";
import AppShowcase from "@/components/AppShowcase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const features = [
    {
      id: 1,
      title: "Earn Money Streaming",
      description: "Turn your passion into profit with our fair and transparent monetization system.",
      icon: "dollar-sign",
    },
    {
      id: 2,
      title: "Global Reach",
      description: "Connect with viewers and creators from around the world and expand your audience.",
      icon: "globe",
    },
    {
      id: 3,
      title: "Multilingual Support",
      description: "Stream in Arabic, English, Hindi, Chinese and reach diverse audiences.",
      icon: "languages", 
    },
    {
      id: 4,
      title: "Easy-to-Use Interface",
      description: "Intuitive design for both viewers and streamers. Start streaming with just one click.",
      icon: "layout",
    }
  ];

  return (
    <div className={`min-h-screen ${currentLanguage === "ar" ? "dir-rtl" : ""}`}>
      <Navbar currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
      
      {/* Hero Banner */}
      <HeroBanner currentLanguage={currentLanguage} />
      
      {/* App Showcase */}
      <section id="showcase" className="section-padding bg-sambow-soft-purple/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">
            Experience Live Streaming Like Never Before
          </h2>
          <AppShowcase />
        </div>
      </section>
      
      {/* About Section */}
      <AboutSection currentLanguage={currentLanguage} />
      
      {/* Features Section */}
      <section id="features" className="section-padding bg-gradient-to-br from-sambow-soft-blue/40 to-sambow-soft-purple/40">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <FeatureCard 
                key={feature.id} 
                title={feature.title} 
                description={feature.description} 
                icon={feature.icon}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" className="btn-large btn-primary animate-pulse-light">
              Start Live Now
            </Button>
          </div>
        </div>
      </section>
      
      {/* Download Section */}
      <section id="download" className="section-padding gradient-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Download Sambow Now</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join millions of users already enjoying Sambow. Available on iOS and Android.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-black hover:bg-gray-900 text-white py-3 px-8 rounded-lg flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-apple"><path d="M12 20.94c1.5 0 2.75-.67 3.95-1.61 1.24-.97 2.08-2.24 2.08-3.83 0-1.7-1-3.2-2.7-3.95-.7-.32-1.42-.44-2.3-.44-1.17 0-2.36.38-3.03.89l-1-.77c1.07-.69 2.71-1.06 4.12-1.06 1.07 0 2.03.15 2.95.56 2.27 1.01 3.35 3.1 3.35 5.12 0 2.16-1.1 3.8-2.5 4.95-1.5 1.23-2.92 2.15-4.92 2.15-1.03 0-2-.23-2.92-.68-2-.98-3.13-2.94-3.21-5.05-.08-2.15.8-4 2.48-5.23a4.99 4.99 0 0 1 3.57-1.02c1 .06 1.94.39 2.82.95l-1 .77c-.73-.5-1.6-.78-2.51-.82-.87-.04-1.73.26-2.41.81-1.3.95-1.94 2.35-1.88 4 .07 1.68.9 3.2 2.43 3.97.74.37 1.5.55 2.3.55V12.6c0-.7-.57-1.26-1.26-1.26H8.4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3.34c1.25 0 2.26 1.02 2.26 2.26V20.94Z"></path><path d="M19.5 12.99V8.4c0-.28.22-.5.5-.5s.5.22.5.5v4.59c0 .28-.22.5-.5.5s-.5-.22-.5-.5Z"></path></svg>
              App Store
            </Button>
            <Button className="bg-black hover:bg-gray-900 text-white py-3 px-8 rounded-lg flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Google Play
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <ContactSection currentLanguage={currentLanguage} />
      
      {/* Footer */}
      <Footer currentLanguage={currentLanguage} />
    </div>
  );
};

export default Index;
