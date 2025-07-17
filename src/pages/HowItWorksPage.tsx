import React from 'react';
import { Users, Sun, DollarSign, ThumbsUp, MessageSquare, Smartphone } from 'lucide-react';

const StepCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  points: string[];
}> = ({ icon, title, description, points }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <svg className="text-green-600 mr-2 mt-1.5 flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span className="text-gray-600">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const HowItWorksPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <div className="relative py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-xl opacity-90">
              Learn about our innovative model for making solar irrigation accessible to 
              all farmers in Malawi through a simple, effective process.
            </p>
          </div>
        </div>
      </div>
      
      {/* The Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our pay-as-you-harvest approach makes solar irrigation technology accessible 
              through a clear, straightforward process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StepCard 
              icon={<Users className="text-green-600" size={28} />}
              title="1. Cooperative Formation"
              description="We organize farmers into cooperatives to share resources and responsibility."
              points={[
                "Groups of 10 farmers form a cooperative unit",
                "Members elect leadership for group management",
                "Cooperative agreements establish shared responsibility",
                "Training on group dynamics and cooperation principles"
              ]}
            />
            
            <StepCard 
              icon={<Sun className="text-green-600" size={28} />}
              title="2. Solar Pump Installation"
              description="We provide and install the solar irrigation technology without upfront costs."
              points={[
                "High-quality solar pumps designed for small-scale farms",
                "Professional installation at optimal locations",
                "Initial training on operation and maintenance",
                "Immediate access to irrigation capabilities"
              ]}
            />
            
            <StepCard 
              icon={<DollarSign className="text-green-600" size={28} />}
              title="3. Pay-As-You-Harvest"
              description="Farmers make affordable payments after harvest when they have income."
              points={[
                "$48 payments twice per year after harvest seasons",
                "Total of 4 payments over 2 years",
                "Total cost of $192 spread over 4 harvests",
                "Payment reminders and flexible payment options"
              ]}
            />
            
            <StepCard 
              icon={<ThumbsUp className="text-green-600" size={28} />}
              title="4. Full Ownership"
              description="After completion of payments, the cooperative fully owns the equipment."
              points={[
                "Transfer of ownership after final payment",
                "Ongoing technical support as needed",
                "Option for maintenance contracts",
                "Opportunity to upgrade or expand system"
              ]}
            />
          </div>
        </div>
      </section>
      
      {/* Payment Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Payment Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide multiple ways for farmers to make payments, ensuring accessibility 
              regardless of technology access.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Smartphone className="text-green-600 mr-4" size={36} />
                <h3 className="text-2xl font-bold">Online Platform</h3>
              </div>
              <p className="text-gray-600 mb-6">
                For farmers with smartphone access (57% of users), our digital platform provides 
                a comprehensive payment and management system.
              </p>
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <h4 className="font-bold mb-2">Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="text-green-600 mr-2 mt-1.5 flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Secure login with personal account</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="text-green-600 mr-2 mt-1.5 flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Payment dashboard showing history and schedule</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="text-green-600 mr-2 mt-1.5 flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Mobile money integration for easy payments</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="text-green-600 mr-2 mt-1.5 flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Digital receipts and payment confirmations</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="text-green-600 mr-2 mt-1.5 flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Automated payment reminders</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="text-green-600 mr-2 mt-1.5 flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Convenient 24/7 access</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="text-green-600 mr-2 mt-1.5 flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Complete payment history and records</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="text-green-600 mr-2 mt-1.5 flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Educational resources for better farming</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <MessageSquare className="text-green-600 mr-4" size={36} />
                <h3 className="text-2xl font-bold">SMS/USSD System</h3>
              </div>
              <p className="text-gray-600 mb-6">
                For farmers without smartphone access, our SMS and USSD system ensures 
                no one is left behind in accessing our solution.
              </p>
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <h4 className="font-bold mb-2">Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="text-green-600 mr-2 mt-1.5 flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Simple USSD codes (*123#) to access payment system</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="text-green-600 mr-2 mt-1.5 flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Works on basic feature phones</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="text-green-600 mr-2 mt-1.5 flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Menu-driven interface with clear instructions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="text-green-600 mr-2 mt-1.5 flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">SMS payment confirmations</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="text-green-600 mr-2 mt-1.5 flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Text reminders for upcoming payments</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="text-green-600 mr-2 mt-1.5 flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Universal access regardless of phone type</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="text-green-600 mr-2 mt-1.5 flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Works without internet connection</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="text-green-600 mr-2 mt-1.5 flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Simple and familiar technology for all farmers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our pay-as-you-harvest model and solar irrigation solution.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What happens if a farmer misses a payment?</h3>
                <p className="text-gray-600">
                  We understand that agricultural income can be variable. If a farmer misses a payment, 
                  we work with the cooperative to create a flexible catch-up plan. The shared responsibility 
                  of the cooperative model helps ensure that temporary hardships don't lead to default.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How are the solar pumps maintained?</h3>
                <p className="text-gray-600">
                  Basic maintenance training is provided to all cooperative members during installation. 
                  Additionally, we have technical support available for more complex issues. Solar pumps 
                  are known for their reliability and low maintenance requirements compared to diesel alternatives.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What area can one solar pump irrigate?</h3>
                <p className="text-gray-600">
                  Our standard solar pump can effectively irrigate up to 1-2 acres of land, which is 
                  suitable for the typical smallholder farm in Malawi. The cooperative model allows 
                  10 farmers to share this resource efficiently through scheduled usage.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How do farmers join the program?</h3>
                <p className="text-gray-600">
                  Farmers can either form their own cooperative of 10 members or join existing groups. 
                  Our local representatives work with communities to establish these groups and provide 
                  the necessary education about the program before enrollment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;