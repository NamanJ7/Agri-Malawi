import React from 'react';
import { Link } from './Link';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2382904/pexels-photo-2382904.jpeg?auto=compress&cs=tinysrgb&w=1280)',
          filter: 'brightness(0.5)'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fadeIn">
            Empowering Malawian Farmers with Affordable Solar Irrigation
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Our pay-as-you-harvest model makes solar irrigation affordable, 
            helping farmers increase yields and income while adapting to climate change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="#payment-section"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-center"
            >
              How Will Farmers Pay?
            </Link>
            <Link
              to="/how-it-works"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;