import React from 'react';
import { Users, Sun, DollarSign, ThumbsUp } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  step: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, details, step }) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 bg-white p-6 rounded-lg shadow-md">
      <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-sm font-medium text-green-600 mb-1">Step {step}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <svg className="text-green-600 mr-2 mt-1.5 flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-gray-600">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our model makes solar irrigation technology accessible to all Malawian farmers 
            through a simple four-step process that aligns with their agricultural cycles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          <Step 
            icon={<Users className="text-green-600" size={28} />}
            title="Cooperative Formation"
            description="We organize farmers into cooperatives of 10 members, creating a support network and accountability structure that increases adoption and payment reliability."
            details={[
              "Groups are formed based on existing community relationships and trust",
              "Leadership roles (Chairperson, Treasurer, Secretary) are democratically elected",
              "Members receive training on cooperative management and responsibilities",
              "Formal registration with Ministry of Trade or Cooperatives Division",
              "Shared responsibility ensures higher payment compliance"
            ]}
            step={1}
          />
          
          <Step 
            icon={<Sun className="text-green-600" size={28} />}
            title="Solar Pump Installation"
            description="Each cooperative receives a shared solar irrigation pump at no upfront cost, giving them immediate access to reliable water for their crops throughout the year."
            details={[
              "Professional installation by trained technicians",
              "Capacity to irrigate 1-2 acres of farmland",
              "Reduces water costs by over 70% compared to diesel alternatives",
              "Zero emissions and no fuel costs",
              "Comprehensive training on operation and maintenance"
            ]}
            step={2}
          />
          
          <Step 
            icon={<DollarSign className="text-green-600" size={28} />}
            title="Pay-As-You-Harvest"
            description="Farmers make affordable payments of $48 twice a year after harvest when they have income, using either our online platform or SMS payments for those without smartphones."
            details={[
              "Payments aligned with harvest seasons when farmers have income",
              "Total cost of $192 spread over 2 years (4 payments)",
              "Both digital and SMS payment options available",
              "Automated payment reminders and tracking",
              "Flexible payment plans for unexpected challenges"
            ]}
            step={3}
          />
          
          <Step 
            icon={<ThumbsUp className="text-green-600" size={28} />}
            title="Full Ownership"
            description="After just 2 years (4 payments), the solar pump belongs entirely to the cooperative, enabling sustainable long-term food security and increased income."
            details={[
              "Complete ownership transfer after final payment",
              "Potential to double or triple crop yields",
              "Ongoing technical support available",
              "Access to additional agricultural technologies",
              "Community-building through shared resource ownership"
            ]}
            step={4}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;