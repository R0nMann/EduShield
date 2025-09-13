import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img className='w-10' src="logo.png" alt="" />
              <span className="text-xl font-semibold text-gray-900">EduShield</span>
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Empowering Indian educational institutions with comprehensive disaster preparedness education and virtual training programs to build a safer, more resilient society.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2">
              <div className="flex items-center text-gray-600 text-sm">
                <Mail className="w-4 h-4 mr-2" />
                <span>cse2024071@rcciit.org.in</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91-6289-149-961</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Kolkata, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
                  Learning Modules
                </a>
              </li>
              <li>
                <a href="" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
                  Virtual Drills
                </a>
              </li>
              <li>
                <a href="" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
                  Emergency Contacts
                </a>
              </li>
              <li>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://ndma.gov.in/Governance/Guidelines" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
                  NDMA Guidelines
                </a>
              </li>
              <li>
                <a href="" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
                  Disaster Management Plan
                </a>
              </li>
              <li>
                <a href="" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
                  Teacher Training
                </a>
              </li>
              <li>
                <a href="" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
                  Safety Protocols
                </a>
              </li>
            </ul>
          </div>     
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 EduShield. All rights reserved. | Supported by NDMA & Ministry of Education, India
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-sm mr-2">Follow us:</span>
              <a href="" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}