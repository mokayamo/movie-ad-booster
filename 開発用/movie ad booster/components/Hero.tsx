
import React from 'react';
import CtaButton from './CtaButton';

const Hero: React.FC = () => {
  return (
    <header className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[#0D0D2B] opacity-90 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D2B] via-[#1a0f35] to-[#0D0D2B] z-0"></div>
      
      {/* Logo positioned like ビズサイ */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-30">
        <img 
          src="./image.png" 
          alt="動画広告ブースター" 
          className="h-8 sm:h-12 md:h-16 w-auto object-contain drop-shadow-lg"
        />
      </div>
      
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left flex flex-col justify-center mt-20 sm:mt-16 lg:mt-4 ml-4 lg:ml-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white mb-6 lg:mb-8">
              動画広告は、<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E6A7] to-[#00B4D8]">冒頭2秒</span>で<br />成果が決まる。
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0">
              成果を変える"フック特化型PDCA"。<br />
              広告運用・動画制作・改善提案をまるごと支援。
            </p>
            <div className="flex justify-center lg:justify-start">
              <CtaButton>無料で相談する</CtaButton>
            </div>
          </div>
          
          {/* Right side - Phone image */}
          <div className="flex items-center justify-center lg:justify-end relative mt-8 sm:mt-12 lg:mt-4">
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              {/* Glow effect behind phone */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[#00E6A7]/20 to-[#00B4D8]/20 rounded-full blur-3xl opacity-80 animate-pulse"></div>
              
              {/* Phone image */}
              <img 
                src="./hero-phone.png" 
                alt="動画広告のモバイル表示例" 
                className="relative w-72 sm:w-80 md:w-96 lg:w-[420px] xl:w-[480px] h-auto object-contain drop-shadow-2xl transform -rotate-1"
              />
              
              {/* Floating elements for visual impact */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-[#00E6A7] to-[#00B4D8] rounded-full opacity-70 animate-bounce"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-r from-[#00B4D8] to-[#00E6A7] rounded-full opacity-50 animate-bounce delay-1000"></div>
              
              {/* Light streaks */}
              <div className="absolute top-1/2 -right-6 w-24 h-0.5 bg-gradient-to-r from-[#00E6A7] to-transparent opacity-40 transform rotate-45 animate-pulse"></div>
              <div className="absolute top-1/3 -left-6 w-20 h-0.5 bg-gradient-to-r from-[#00B4D8] to-transparent opacity-30 transform -rotate-45 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
