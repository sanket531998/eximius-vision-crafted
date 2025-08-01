import { Monitor, Globe, BarChart, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">SERVICES</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">
            what we really know how
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center group hover:shadow-card transition-all duration-300 border-none bg-white/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                <Monitor className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Application Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Taking a software product from concept to reality is a complex and tough process. 
                ESS is committed to providing high quality, offshore outsourcing, consulting, 
                and software development on time and within your budget. We bring you a range 
                of services that best fits your business requirements.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-card transition-all duration-300 border-none bg-white/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether it is designing a new website, revamping an existing one, or maintenance 
                and management of a website, ESS has the necessary skills and experience to 
                provide the best technical assistance at the most reasonable cost. Our talented 
                team of website designers uses the latest in website development technology to 
                provide you with amazing service at competitive prices.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-card transition-all duration-300 border-none bg-white/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                <BarChart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">IT Consultancy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our business analysts and consultants possess many years of experience of 
                Software Development. We have also expert team in Server management, security 
                solution, firewall, Database management. Our team is all technically 
                knowledgeable and have first-hand experience of handling, developing, managing 
                and delivering complex and large scale projects themselves.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-card transition-all duration-300 border-none bg-white/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                <Package className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Software Components</h3>
              <p className="text-muted-foreground leading-relaxed">
                Software components and controls are pre-built software libraries that you 
                can use in your application to add new functionality. By adding functionality 
                written by our experts, you are not only saving time and effort but also 
                adding high quality features to your application - fast.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;