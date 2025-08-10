
import React, { useState } from 'react';
import type { FaqItemType } from '../types';
import { ArrowDownIcon } from '../constants';

const faqData: FaqItemType[] = [
  {
    question: "動画素材がなくても大丈夫ですか?",
    answer: "はい、大丈夫です。当社で画像・フリー素材を活用し、ベース構成に沿って編集いたします。もちろん、ご提供いただける素材があれば最大限活用させていただきます。"
  },
  {
    question: "最低契約期間はありますか?",
    answer: "初回のご契約は3ヶ月固定となります。これは、成果を出すために一定のテストと改善期間が必要なためです。4ヶ月目以降は1ヶ月ごとの自動更新となります。"
  },
  {
    question: "他媒体(TikTokやYouTube) も依頼できますか?",
    answer: "はい。月間の広告媒体費が100万円以上の場合にご相談可能です。媒体の特性に合わせた最適なクリエイティブ戦略をご提案しますので、お気軽にご相談ください。"
  },
    {
    question: "レポートはどのような内容ですか?",
    answer: "インプレッション数、クリック数、CTR、CPC、CV数、CPAなどの主要指標に加え、どのフックパターンのパフォーマンスが良かったかの分析と、次回の改善アクションプランをご報告します。"
  }
];


const FaqItem: React.FC<{ item: FaqItemType }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 sm:py-5 flex justify-between items-center"
      >
        <span className="text-lg font-semibold text-white">{item.question}</span>
        <ArrowDownIcon className={`w-6 h-6 text-[#00E6A7] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="pb-6 text-gray-300 leading-relaxed">
         {item.answer}
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#111133]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            よくある質問
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-16 bg-gradient-to-r from-[#00E6A7] to-[#00B4D8] rounded-full"></div>
          </div>
        </div>
        <div className="bg-[#111133] rounded-2xl p-4 sm:p-6 shadow-xl shadow-[#00E6A7]/30 border-2 border-[#00E6A7]/60 hover:border-[#00E6A7] transition-all duration-300 hover:shadow-[#00E6A7]/50 hover:shadow-2xl">
          {faqData.map((item, index) => (
            <FaqItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
