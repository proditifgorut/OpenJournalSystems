import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, MapPin, Phone, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold">Journal of Advanced Research</h3>
                <p className="text-xs text-gray-400">OJS Platform</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              A peer-reviewed, open-access journal publishing high-quality research across multiple disciplines.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/browse" className="text-sm hover:text-blue-400 transition-colors">Browse Articles</Link></li>
              <li><Link to="/issues" className="text-sm hover:text-blue-400 transition-colors">Current Issue</Link></li>
              <li><Link to="/submit" className="text-sm hover:text-blue-400 transition-colors">Submit Manuscript</Link></li>
              <li><Link to="/about" className="text-sm hover:text-blue-400 transition-colors">About Journal</Link></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Editorial Board</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Author Guidelines</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">For Authors</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Submission Guidelines</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Publication Ethics</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Peer Review Process</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Article Processing Charges</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Copyright & Licensing</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">123 Academic Street, University Campus, City 12345</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">editor@journaladvresearch.org</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Journal of Advanced Research. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Accessibility</a>
              <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Sitemap</a>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-4">
            Powered by Open Journal Systems (OJS) v5.0
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
