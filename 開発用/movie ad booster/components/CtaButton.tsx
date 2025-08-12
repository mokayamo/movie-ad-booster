
import React from 'react';

interface CtaButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'orange';
  size?: 'normal' | 'large';
}

const CtaButton: React.FC<CtaButtonProps> = ({ children, className = '', variant = 'primary', size = 'normal' }) => {
  const primaryClasses = "bg-gradient-to-r from-[#00E6A7] to-[#00B4D8] text-[#0D0D2B] font-bold shadow-lg shadow-cyan-500/30 hover:scale-105 transform transition-transform duration-300";
  const secondaryClasses = "bg-transparent border-2 border-[#00E6A7] text-[#00E6A7] font-bold hover:bg-[#00E6A7] hover:text-[#0D0D2B] transform transition-colors duration-300";
  const orangeClasses = "bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold shadow-lg shadow-orange-500/30 hover:scale-105 hover:from-orange-600 hover:to-orange-700 transform transition-all duration-300";

  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary': return secondaryClasses;
      case 'orange': return orangeClasses;
      default: return primaryClasses;
    }
  };

  const sizeClasses = size === 'large' 
    ? 'py-5 px-12 sm:py-6 sm:px-14 text-xl sm:text-2xl'
    : 'py-3 px-8 sm:py-4 sm:px-10 text-lg sm:text-xl';

  return (
    <a
      href="mailto:soudan@movie-ad-booster.example.com?subject=動画広告ブースターの無料相談"
      className={`inline-block rounded-full font-semibold ${getVariantClasses()} ${sizeClasses} ${className}`}
    >
      {children}
    </a>
  );
};

export default CtaButton;
