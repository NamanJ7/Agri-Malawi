import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SolutionPage from './pages/SolutionPage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '/':
        document.title = 'AgriMalawi - Affordable Solar Irrigation for Malawian Farmers';
        return <HomePage />;
      case '/solution':
        document.title = 'Our Solution - AgriMalawi';
        return <SolutionPage />;
      case '/about':
        document.title = 'About Us - AgriMalawi';
        return <AboutPage />;
      case '/how-it-works':
        document.title = 'How It Works - AgriMalawi';
        return <HowItWorksPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;