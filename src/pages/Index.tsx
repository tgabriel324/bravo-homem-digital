
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';
import TreatmentBlocks from '@/components/home/TreatmentBlocks';
import Testimonials from '@/components/home/Testimonials';
import Guarantees from '@/components/home/Guarantees';
import FAQ from '@/components/home/FAQ';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <TreatmentBlocks />
        <Testimonials />
        <Guarantees />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
