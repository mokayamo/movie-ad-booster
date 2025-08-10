
import React from 'react';

const serviceItems = [
  { label: "媒体", value: "Meta広告 (Instagram/Facebook)" },
  { label: "動画", value: "月12本のショート動画" },
  { label: "改善サイクル", value: "2週間ごとに差し替え" },
  { label: "レポート", value: "月次改善レポート" },
  { label: "契約期間", value: "3ヶ月（4ヶ月目以降は毎月更新）" }
];

const ServiceDetails: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#111133]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            サービス内容
          </h2>
          <p className="mt-4 text-lg text-gray-400">ご提供するサービスの全体像です。</p>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-16 bg-gradient-to-r from-[#00E6A7] to-[#00B4D8] rounded-full"></div>
          </div>
        </div>
        <div className="bg-[#111133] rounded-2xl shadow-xl shadow-[#00E6A7]/30 border-2 border-[#00E6A7]/60 hover:border-[#00E6A7] transition-all duration-300 hover:shadow-[#00E6A7]/50 hover:shadow-2xl overflow-hidden">
          <div className="divide-y divide-gray-700">
            {serviceItems.map((item, index) => (
              <div key={index} className="px-4 sm:px-6 py-4 sm:py-5 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-center">
                <dt className="font-bold text-gray-300 text-lg">{item.label}</dt>
                <dd className="text-gray-300 md:col-span-2">{item.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
