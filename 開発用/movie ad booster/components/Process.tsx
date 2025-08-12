
import React from 'react';

const steps = [
  { number: 1, title: "無料相談", description: "ヒアリング" },
  { number: 2, title: "お申し込み", description: "契約書の締結" },
  { number: 3, title: "動画企画 & 制作", description: "ベース + フック11本" },
  { number: 4, title: "広告スタート", description: "アカウント構築" },
  { number: 5, title: "高速PDCA運用", description: "2週間サイクルで改善" }
];

const Process: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0D0D2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            導入までの5ステップ
          </h2>
          <p className="mt-4 text-lg text-gray-400">お申し込みから運用開始まで、スムーズに進行します。</p>
        </div>
        <div className="relative">
          {/* The connecting line */}
          <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:right-auto md:mx-0 top-10 bottom-10 w-1 bg-gray-700 rounded-full md:hidden z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-10 md:gap-6">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center px-2 relative z-20">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#00E6A7] to-[#00B4D8] text-[#0D0D2B] font-extrabold text-3xl mb-4 border-4 border-[#111133] z-10">
                  {step.number}
                </div>
                <div className="bg-[#111133] rounded-2xl p-4 sm:p-6 shadow-xl shadow-[#00E6A7]/30 border-2 border-[#00E6A7]/60 hover:border-[#00E6A7] transition-all duration-300 hover:shadow-[#00E6A7]/50 hover:shadow-2xl h-24 sm:h-28 w-full max-w-xs mx-auto flex flex-col justify-center">
                  <h3 className="font-bold text-lg sm:text-xl text-white mb-2 text-center">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400 text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
