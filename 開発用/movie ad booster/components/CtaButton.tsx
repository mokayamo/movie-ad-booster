
import React from 'react';

interface CtaButtonProps {
  children: React.ReactNode;
  className?: string;
  isPrimary?: boolean;
}

const CtaButton: React.FC<CtaButtonProps> = ({ children, className = '', isPrimary = true }) => {
  const primaryClasses = "bg-gradient-to-r from-[#00E6A7] to-[#00B4D8] text-[#0D0D2B] font-bold shadow-lg shadow-cyan-500/30 hover:scale-105 transform transition-transform duration-300";
  const secondaryClasses = "bg-transparent border-2 border-[#00E6A7] text-[#00E6A7] font-bold hover:bg-[#00E6A7] hover:text-[#0D0D2B] transform transition-colors duration-300";

  return (
    <a
      href="mailto:soudan@movie-ad-booster.example.com?subject=動画広告ブースターの無料相談"
      className={`inline-block py-4 px-10 rounded-full text-lg ${isPrimary ? primaryClasses : secondaryClasses} ${className}`}
    >
      {children}
    </a>
  );
};

export default CtaButton;
