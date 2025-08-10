import React from 'react';
import CtaButton from './CtaButton';

const CtaSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#0D0D2B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            まずは無料相談でお気軽にご相談ください
          </h2>
          <p className="text-gray-400 text-lg">
            あなたの動画広告の課題を解決する最適なプランをご提案します
          </p>
        </div>
        <CtaButton variant="primary" size="large">
          無料で相談する
        </CtaButton>
      </div>
    </section>
  );
};

export default CtaSection;