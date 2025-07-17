import React from 'react';
import { Globe, ShieldCheck, CircleDollarSign } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <div className="relative py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl opacity-90">
              AgriMalawi is on a mission to transform agriculture in Malawi through 
              affordable, sustainable solar irrigation solutions.
            </p>
          </div>
        </div>
      </div>
      
      {/* Vision and Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl text-gray-600 mb-8">
                A Malawi where every farmer has access to sustainable irrigation, 
                regardless of income level, enabling food security and prosperity 
                across the nation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Globe className="text-green-600" size={28} />
                  </div>
                  <h3 className="font-bold mb-1">Sustainable</h3>
                  <p className="text-gray-600">Environmentally sound solutions</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="text-green-600" size={28} />
                  </div>
                  <h3 className="font-bold mb-1">Reliable</h3>
                  <p className="text-gray-600">Consistent water access</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CircleDollarSign className="text-green-600" size={28} />
                  </div>
                  <h3 className="font-bold mb-1">Affordable</h3>
                  <p className="text-gray-600">Accessible for all farmers</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Grand Vision</h2>
              <p className="text-gray-600 mb-8">
                To truly make an impact, we need three things:
              </p>
              <ul className="space-y-6">
                <li className="flex">
                  <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Capital for Expansion</h3>
                    <p className="text-gray-600">
                      We need the capital to distribute 1000 pumps across districts in Malawi, 
                      bringing this technology to communities that need it most.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Local Partnerships</h3>
                    <p className="text-gray-600">
                      We need to establish partnerships with local NGOs on the ground who can 
                      help with implementation, training, and community engagement.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Technical Support</h3>
                    <p className="text-gray-600">
                      We need more technical support with our platform to enhance the payment 
                      system and expand our digital offering to better serve farmers.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Farmer Co-ops Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Importance of Farmer Cooperatives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our model leverages existing cooperative structures to maximize impact and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Farmer Co-ops in Malawi: Key Facts</h3>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-semibold bg-green-50">Number of Co-ops</td>
                      <td className="py-3 px-4">Over 400 registered agricultural cooperatives (and many more informal groups)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-semibold bg-green-50">Typical Size</td>
                      <td className="py-3 px-4">Ranges from 5–15 farmers per group (perfect fit for our model!)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-semibold bg-green-50">Common Crops</td>
                      <td className="py-3 px-4">Maize, tobacco, groundnuts, beans, soybeans, and horticultural crops</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-semibold bg-green-50">Formal Structure</td>
                      <td className="py-3 px-4">Must register with the Ministry of Trade or Cooperatives Division if formal; otherwise informal groupings are common</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-semibold bg-green-50">Leadership</td>
                      <td className="py-3 px-4">Usually elect a Chairperson, Treasurer, and Secretary</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold bg-green-50">Challenges</td>
                      <td className="py-3 px-4">Often lack capital, technical knowledge, and reliable access to technology — exactly what we are solving with AgriMalawi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Co-ops Are Crucial for Our Model</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-2">Shared Costs</h4>
                  <p className="text-gray-600">
                    Co-op members can share the cost of a solar irrigation tool, making payments affordable for individuals who couldn't manage alone.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-2">Peer Pressure</h4>
                  <p className="text-gray-600">
                    Members encourage each other to pay on time, resulting in lower default risk for our financing model.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-2">Faster Adoption</h4>
                  <p className="text-gray-600">
                    Instead of selling to one farmer at a time, we target entire groups, enabling much faster scaling of our solution.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-2">Built-in Trust</h4>
                  <p className="text-gray-600">
                    Farmers are more willing to join if friends and neighbors are already in the co-op, creating a natural expansion mechanism.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we're changing the lives of farmers in Malawi through our innovative model.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Transforming Livelihoods</h3>
            <p className="text-gray-700 mb-8">
              Under our payment model, the average Malawian farmer has doubled their income. 
              This extra income can be transformative in improving the standard of living for 
              a Malawian family.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-green-600 text-lg mb-2">New Technology</h4>
                <p className="text-gray-600">
                  Families can afford a new phone or radio for communication and information
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-green-600 text-lg mb-2">Home Improvements</h4>
                <p className="text-gray-600">
                  Buy a solar panel to power their home electricity needs
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-green-600 text-lg mb-2">Better Education</h4>
                <p className="text-gray-600">
                  Pay for children's school fees and educational materials
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Future Opportunities */}
      <section className="py-16 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Future Opportunities</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              The hidden power of our cooperative model provides opportunities for future growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Group Insurance</h3>
              <p className="opacity-90">
                Later, we can offer simple crop or equipment insurance linked to co-ops, 
                providing additional security for farmers' investments.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Larger Grants</h3>
              <p className="opacity-90">
                Many NGOs prefer funding co-op models because the impact per dollar is higher, 
                unlocking potential for larger developmental grants.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Expanded Offerings</h3>
              <p className="opacity-90">
                Once farmers trust our brand, we can offer more tools like solar grain dryers, 
                threshers, solar chillers, and other agricultural technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;