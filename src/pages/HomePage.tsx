import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import PhoneDemo from '../components/PhoneDemo';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';
import ImpactSection from '../components/ImpactSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <HowItWorks />
      <PhoneDemo />
      <Testimonials />
      <ImpactSection />
    </div>
  );
};

export default HomePage;