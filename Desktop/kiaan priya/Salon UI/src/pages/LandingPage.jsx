import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturesHighlight from '../components/FeaturesHighlight';
import ValueProp from '../components/ValueProp';
import SpaSoftware from '../components/SpaSoftware';
import Industries from '../components/Industries';
import TrustedBrands from '../components/TrustedBrands';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import DemoSection from '../components/DemoSection';
import Footer from '../components/Footer';
import StatsBanner from '../components/StatsBanner';
import WhatsAppFAB from '../components/WhatsAppFAB';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustedBrands />
        <StatsBanner />
        <ValueProp />
        <SpaSoftware />
        <FeaturesHighlight />
        <Industries />
        <DemoSection />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;












