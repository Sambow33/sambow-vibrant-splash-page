
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactSectionProps {
  currentLanguage: string;
}

const ContactSection = ({ currentLanguage }: ContactSectionProps) => {
  return (
    <section id="contact" className="section-padding bg-sambow-soft-purple/20">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">
          Contact Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`${currentLanguage === 'ar' ? 'md:order-2' : ''}`}>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Your name" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your email" 
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    type="text" 
                    placeholder="Message subject" 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    rows={5}
                    className="w-full"
                  />
                </div>
                
                <Button className="btn-primary w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className={`${currentLanguage === 'ar' ? 'md:order-1 text-right' : ''}`}>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you! Whether you have questions about our platform, need technical support, or want to explore partnership opportunities, our team is ready to assist.
            </p>
            
            <div className="space-y-6">
              <div className={`flex items-center gap-4 ${currentLanguage === 'ar' ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 bg-sambow-soft-purple rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sambow-purple"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <p className="text-sambow-purple">+96170555995</p>
                </div>
              </div>
              
              <div className={`flex items-center gap-4 ${currentLanguage === 'ar' ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 bg-sambow-soft-pink rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sambow-pink"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="2" y1="10" x2="22" y2="10"></line></svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-sambow-pink">hazzakcom@gmail.com</p>
                </div>
              </div>
              
              <div className={`flex items-center gap-4 ${currentLanguage === 'ar' ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 bg-sambow-soft-blue rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sambow-blue"><path d="M12 20.94c1.5 0 2.75-.67 3.95-1.61 1.24-.97 2.08-2.24 2.08-3.83 0-1.7-1-3.2-2.7-3.95-.7-.32-1.42-.44-2.3-.44-1.17 0-2.36.38-3.03.89l-1-.77c1.07-.69 2.71-1.06 4.12-1.06 1.07 0 2.03.15 2.95.56 2.27 1.01 3.35 3.1 3.35 5.12 0 2.16-1.1 3.8-2.5 4.95-1.5 1.23-2.92 2.15-4.92 2.15-1.03 0-2-.23-2.92-.68-2-.98-3.13-2.94-3.21-5.05-.08-2.15.8-4 2.48-5.23a4.99 4.99 0 0 1 3.57-1.02c1 .06 1.94.39 2.82.95l-1 .77c-.73-.5-1.6-.78-2.51-.82-.87-.04-1.73.26-2.41.81-1.3.95-1.94 2.35-1.88 4 .07 1.68.9 3.2 2.43 3.97.74.37 1.5.55 2.3.55V12.6c0-.7-.57-1.26-1.26-1.26H8.4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3.34c1.25 0 2.26 1.02 2.26 2.26V20.94Z"></path><path d="M19.5 12.99V8.4c0-.28.22-.5.5-.5s.5.22.5.5v4.59c0 .28-.22.5-.5.5s-.5-.22-.5-.5Z"></path></svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Social Media</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-gray-600 hover:text-sambow-purple transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-sambow-purple transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-sambow-purple transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-sambow-purple transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-sambow-purple transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tiktok"><path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"></path><path d="M16 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path><path d="M21 8v7.5a3.5 3.5 0 0 1-7 0V8"></path><path d="M13 12a3 3 0 0 0-3 3"></path><path d="M5 3v7.5A3.5 3.5 0 0 1 1.5 14"></path><path d="M22 3V10"></path><path d="M9 17v4"></path></svg>
                    </a>
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

export default ContactSection;
