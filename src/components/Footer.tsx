import React from 'react';
import { Sun } from 'lucide-react';
import { Link } from './Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-2xl font-bold flex items-center mb-4">
              <Sun className="mr-2 text-yellow-500" size={24} />
              <span>Agri<span className="text-green-500">Malawi</span></span>
            </Link>
            <p className="text-gray-400 mb-4">
              Empowering Malawian farmers with affordable solar irrigation solutions through our pay-as-you-harvest model.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/solution" className="text-gray-400 hover:text-white transition">Solution</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-white transition">How It Works</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} AgriMalawi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;