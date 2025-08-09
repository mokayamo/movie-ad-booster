
import React from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import ServiceDetails from './components/ServiceDetails';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0D0D2B] text-gray-200 font-sans leading-relaxed">
      <Hero />
      <main>
        <ProblemSolution />
        <ServiceDetails />
        <Process />
        <Pricing />
        <Team />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
