import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                <img src="/ess_logo.png" alt="ESS" />
              </span>
            </div>
            <div>
              <h1 className="text-lg text-gray font-bold">
                Eximius Software Solutions
              </h1>
              <p className="text-xs text-primary-glow font-semibold">
                beyond the ordinary...
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-semibold">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray hover:text-primary-glow transition-colors"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray hover:text-primary-glow transition-colors"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray hover:text-primary-glow transition-colors"
            >
              SERVICES
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray hover:text-primary-glow transition-colors"
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => scrollToSection("internship")}
              className="text-gray hover:text-primary-glow transition-colors"
            >
              INTERNSHIP
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray hover:text-primary-glow transition-colors"
            >
              CONTACT
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray hover:text-primary-glow transition-colors text-left"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray hover:text-primary-glow transition-colors text-left"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray hover:text-primary-glow transition-colors text-left"
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-gray hover:text-primary-glow transition-colors text-left"
              >
                PORTFOLIO
              </button>
              <button
                onClick={() => scrollToSection("internship")}
                className="text-gray hover:text-primary-glow transition-colors text-left"
              >
                INTERNSHIP
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray hover:text-primary-glow transition-colors text-left"
              >
                CONTACT
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
