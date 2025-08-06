import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        {/* Company Info */}
        <div>
          <h3 className="text-white text-xl font-bold mb-2">
            Eximius Software Solutions
          </h3>
          <p className="text-gray-400">
            Beyond the ordinary... Delivering digital excellence since 2013.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-white">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#internship" className="hover:text-white">
                Internship
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social and Copyright */}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-white font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                🌐
              </a>
              <a href="#" className="hover:text-white">
                🐦
              </a>
              <a href="#" className="hover:text-white">
                💼
              </a>
            </div>
          </div>
          <p className="text-gray-500 mt-6 md:mt-0">
            © 2013–2025 Eximius Software Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
