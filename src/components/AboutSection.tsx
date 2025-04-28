
import { cn } from "@/lib/utils";

interface AboutSectionProps {
  currentLanguage: string;
}

const AboutSection = ({ currentLanguage }: AboutSectionProps) => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className={`flex flex-col md:flex-row items-center gap-12 ${currentLanguage === 'ar' ? 'md:flex-row-reverse' : ''}`}>
          {/* About Content */}
          <div className={`w-full md:w-1/2 ${currentLanguage === 'ar' ? 'text-right' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Sambow, we're redefining the live streaming experience. Our platform is built on the belief that everyone deserves to share their talents, connect with global audiences, and be rewarded for their creativity.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              We've created a space where content creators from all backgrounds can thrive, with multilingual support that breaks down language barriers and connects cultures across the world.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-sambow-soft-purple/30 p-5 rounded-lg">
                <h3 className="font-semibold text-xl mb-2 text-sambow-purple">Our Vision</h3>
                <p className="text-gray-700">To build the world's most inclusive and rewarding live streaming platform.</p>
              </div>
              <div className="bg-sambow-soft-pink/30 p-5 rounded-lg">
                <h3 className="font-semibold text-xl mb-2 text-sambow-pink">Our Values</h3>
                <p className="text-gray-700">Creativity, diversity, transparency, and community come first.</p>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -z-10 inset-0 rounded-3xl bg-gradient-to-br from-sambow-soft-purple via-white to-sambow-soft-pink opacity-50 blur-xl"></div>
              
              <div className="bg-white/80 backdrop-blur-sm border border-white rounded-3xl shadow-xl p-8 md:p-10">
                <h3 className="text-2xl font-semibold mb-8 text-center">Why Creators Choose Sambow</h3>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-sambow-purple mb-2">2M+</div>
                    <p className="text-gray-600">Active Creators</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-sambow-pink mb-2">150+</div>
                    <p className="text-gray-600">Countries</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-sambow-blue mb-2">15M+</div>
                    <p className="text-gray-600">Monthly Viewers</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-sambow-orange mb-2">$25M</div>
                    <p className="text-gray-600">Creator Earnings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
