import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Globe, Lightbulb } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Eximius Software Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-200">
            Beyond the ordinary...
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            We transform ideas into powerful digital solutions. From innovative web applications 
            to cutting-edge software development, we're your trusted partner in digital excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-glow"
              onClick={() => scrollToSection('services')}
            >
              Explore Our Services
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
              <p className="text-blue-200">Tailored solutions for your unique business needs</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Excellence</h3>
              <p className="text-blue-200">Modern, responsive websites that drive results</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-blue-200">Cutting-edge solutions using latest technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;