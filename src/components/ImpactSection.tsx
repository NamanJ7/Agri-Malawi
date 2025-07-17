import React from 'react';
import { TrendingUp, ThumbsUp, Users } from 'lucide-react';

const ImpactSection: React.FC = () => {
  return (
    <section className="py-16 bg-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Through our pay-as-you-harvest model, we're transforming agriculture 
            and improving lives across Malawi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-green-700 bg-opacity-50 p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3">2x Income</h3>
            <p className="opacity-90">
              The average Malawian farmer has doubled their income using our solar irrigation solution, 
              creating new opportunities for education, healthcare, and improved living conditions.
            </p>
          </div>
          
          <div className="bg-green-700 bg-opacity-50 p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ThumbsUp size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3">70% Cost Savings</h3>
            <p className="opacity-90">
              Solar pumps reduce water costs by over 70% compared to diesel alternatives, 
              while providing a sustainable, maintenance-free solution for years to come.
            </p>
          </div>
          
          <div className="bg-green-700 bg-opacity-50 p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Community Building</h3>
            <p className="opacity-90">
              Our cooperative model strengthens community bonds, creates shared resources, 
              and builds resilience against climate challenges through collective action.
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto mt-12 bg-green-700 bg-opacity-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Our Vision for the Future</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-green-600 rounded-full p-1 mr-3 mt-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p>Distribute 1,000 solar pumps across Malawi, impacting over 10,000 farmers directly</p>
            </li>
            <li className="flex items-start">
              <div className="bg-green-600 rounded-full p-1 mr-3 mt-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p>Establish partnerships with local NGOs to strengthen on-the-ground support</p>
            </li>
            <li className="flex items-start">
              <div className="bg-green-600 rounded-full p-1 mr-3 mt-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p>Enhance our platform to better serve both digital and non-digital farmers</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;