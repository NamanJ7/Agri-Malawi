import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
      <Quote className="absolute top-4 right-4 text-green-100" size={40} />
      <div className="relative z-10">
        <p className="text-gray-700 mb-6 italic">"<span className="ml-1">{quote}</span>"</p>
        <div>
          <div className="font-bold text-gray-900">{name}</div>
          <div className="text-green-600 text-sm">{title}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Idea Validation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's what Malawian experts say about our pay-as-you-harvest approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <TestimonialCard 
            quote="The Pay-as-you harvest is a brilliant concept ... farmers in Malawi need affordable solutions to obtain the machinery they need to thrive." 
            name="Jacob Milanze" 
            title="Energy Economist from Malawi" 
          />
          <TestimonialCard 
            quote="Solar pumps with pay-as-you-harvest help farmers a lot. Many cannot buy machines all at once. This makes it easier for them to grow food and take care of their families." 
            name="Chancy Ngoma" 
            title="Cleantech Entrepreneur from Malawi" 
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;