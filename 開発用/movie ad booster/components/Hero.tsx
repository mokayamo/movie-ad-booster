
import React from 'react';
import CtaButton from './CtaButton';

const Hero: React.FC = () => {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0D0D2B] opacity-90 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D2B] via-[#1a0f35] to-[#0D0D2B] z-0"></div>
      
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
          動画広告は、<br className="sm:hidden" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E6A7] to-[#00B4D8]">冒頭2秒</span>で成果が決まる。
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
          成果を変える“フック特化型PDCA”。<br />
          広告運用・動画制作・改善提案をまるごと支援。
        </p>
        <CtaButton>無料で相談する</CtaButton>
      </div>
    </header>
  );
};

export default Hero;
