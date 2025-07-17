import React from 'react';
import { Sun, Droplet, Sprout, ChevronRight } from 'lucide-react';

const SolutionPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <div className="relative py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solution</h1>
            <p className="text-xl opacity-90">
              AgriMalawi provides affordable solar irrigation through an innovative 
              pay-as-you-harvest model, making technology accessible to all farmers.
            </p>
          </div>
        </div>
      </div>
      
      {/* How Solar Irrigation Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Solar Irrigation Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the technology behind our solution and how it transforms farming in Malawi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div>
              <div className="bg-green-50 p-10 rounded-lg">
                <div className="aspect-square max-w-md flex items-center justify-center mx-auto">
                  <Sun className="text-yellow-500" size={160} />
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Solar Energy Capture</h3>
                  <p className="text-gray-600">
                    Solar panels convert sunlight into electricity without needing fuel or 
                    grid connection, perfect for rural areas with limited infrastructure.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Water Pumping</h3>
                  <p className="text-gray-600">
                    The solar energy powers a pump that draws water from rivers, lakes, or 
                    wells, providing reliable irrigation even during dry seasons.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Crop Irrigation</h3>
                  <p className="text-gray-600">
                    Water is distributed to crops through simple irrigation methods, 
                    ensuring consistent water supply regardless of rainfall.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solar irrigation solution provides multiple advantages for Malawian farmers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Droplet className="mx-auto text-blue-500 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Reliable Water Access</h3>
              <p className="text-gray-600">
                Guarantees year-round water for crops, reducing dependence on rainfall 
                and providing security against droughts and climate change.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Sun className="mx-auto text-yellow-500 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Clean Energy</h3>
              <p className="text-gray-600">
                Zero emissions and no fuel costs, making irrigation sustainable and 
                independent from unreliable and expensive fossil fuels.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Sprout className="mx-auto text-green-500 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Increased Yields</h3>
              <p className="text-gray-600">
                Consistent irrigation can double or triple crop yields, allowing for 
                multiple growing seasons and more diverse, nutritious crops.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Payment Model */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Pay-As-You-Harvest Model</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With our payment system designed specifically for farmers, accessing irrigation 
              technology becomes affordable and realistic.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-green-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">How It Works</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ChevronRight className="text-green-600 mt-1 mr-2 flex-shrink-0" size={18} />
                    <p>Farmers make payments of <span className="font-bold">$48</span> twice a year after harvest seasons</p>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-green-600 mt-1 mr-2 flex-shrink-0" size={18} />
                    <p>Total of <span className="font-bold">4 payments</span> over 2 years for full ownership</p>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-green-600 mt-1 mr-2 flex-shrink-0" size={18} />
                    <p>No upfront costs, eliminating the biggest barrier to adoption</p>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-green-600 mt-1 mr-2 flex-shrink-0" size={18} />
                    <p>Cooperative model divides responsibility among 10 farmers</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Why It Works</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ChevronRight className="text-green-600 mt-1 mr-2 flex-shrink-0" size={18} />
                    <p>Aligns with farmers' cash flow cycles and harvest seasons</p>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-green-600 mt-1 mr-2 flex-shrink-0" size={18} />
                    <p>Reduced default risk as payments come after income is generated</p>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-green-600 mt-1 mr-2 flex-shrink-0" size={18} />
                    <p>Farmers see immediate benefits that help cover payment costs</p>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-green-600 mt-1 mr-2 flex-shrink-0" size={18} />
                    <p>Similar models have reduced default rates to under 5%</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hybrid Payment Approach */}
      <section className="py-16 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hybrid Payment Solution</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our payment system is designed to work for all farmers, whether they have 
              smartphone access or not.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">Digital Platform</h3>
              <p className="mb-6 opacity-90 text-center">
                For the 57% of farmers with smartphone access
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Login to secure personal account dashboard</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>View payment history and upcoming schedules</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Make payments using mobile money integration</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Receive digital payment confirmations</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Access educational resources on crop management</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white bg-opacity-10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">SMS/USSD System</h3>
              <p className="mb-6 opacity-90 text-center">
                For farmers without smartphone access
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Access payment system through basic USSD codes</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Works on any mobile phone, even non-smartphones</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Simple menu-driven interface with clear instructions</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Receive SMS payment reminders and confirmations</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Local language support for increased accessibility</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionPage;