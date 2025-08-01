import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, FileText, GraduationCap } from "lucide-react";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">OUR WORKS</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">
            What we are proud of
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-card transition-all duration-300 border-none bg-white/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                  <span className="text-white font-bold text-xl">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Quiktrade</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Developed for <span className="text-primary font-semibold">Fourwayz Distributors Pvt. Ltd.</span> to help their businesses to manage inventory, sales, 
                    purchasing, shipping and related functions. It helps to track products and components as they 
                    move from vendors to warehouses, between warehouses, and finally to retail locations or directly to customers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Quiktrade helps the company to manage internal and external resources efficiently by minimizing 
                    stockouts but ensuring overstocking doesn't occur as well. Different forms of custom reporting 
                    are also the intrinsic part of QuikTrade, that helps to organize and track the business accounting.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card transition-all duration-300 border-none bg-white/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                  <FileText className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Digital Document Management System</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Digital Document Management System keeps all important documents in a digitally secured form, 
                    which can be accessed in no time eliminating walls of filing cabinets.
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Developed for <span className="text-primary font-semibold">Shri Ramdeobaba College of Engineering & Management</span> (admin dept.), 
                    to convert and store all academic documents in electronic format and provides the security and disaster recovery.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    In DDMS, paper documents are imaged (scanned) and stored electronically, allowing user to tracks 
                    and fetch in a user friendly manner.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card transition-all duration-300 border-none bg-white/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Engifunda.com</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Engineering Admission Process web portal helpline, developed for <span className="text-primary font-semibold">EDAS Technologies Pvt. Ltd.</span>
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    It provides online Engineering Education Solutions for students, faculties and institutes, 
                    helps to establish collaborative partnerships with industries and organizations for research, 
                    development and consultancies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;