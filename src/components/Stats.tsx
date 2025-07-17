import React from 'react';

const StatCard: React.FC<{ title: string; value: string; description: string }> = ({ 
  title, 
  value, 
  description 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:shadow-lg">
      <h3 className="text-gray-600 font-medium text-lg mb-2">{title}</h3>
      <div className="text-3xl font-bold text-green-600 mb-2">{value}</div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Challenge We're Addressing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our solution is built on accurate data that highlights the need for 
            affordable irrigation technology in Malawi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StatCard 
            title="Reliance on Agriculture" 
            value="80%" 
            description="of Malawi's population depends on smallholder agriculture for survival."
          />
          <StatCard 
            title="Irrigation Gap" 
            value="4%" 
            description="of farmland in Sub-Saharan Africa is irrigated — vs. 37% in Asia."
          />
          <StatCard 
            title="Electrification Rate" 
            value="<15%" 
            description="nationally in Malawi, with less than 5% in rural areas."
          />
          <StatCard 
            title="Cost Reduction" 
            value=">70%" 
            description="reduction in water costs using solar pumps compared to diesel alternatives."
          />
          <StatCard 
            title="Income Increase" 
            value="2-5x" 
            description="boost in farmer incomes through smart irrigation technology."
          />
          <StatCard 
            title="Monetized Income" 
            value="13%" 
            description="of typical smallholder income (~$1,840/year) is monetized ($239)."
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;