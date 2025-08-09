
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
    <section className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">サービス内容</h2>
          <p className="mt-4 text-lg text-gray-400">ご提供するサービスの全体像です。</p>
        </div>
        <div className="bg-[#1A1A3D] rounded-2xl shadow-lg overflow-hidden border border-gray-700">
          <div className="divide-y divide-gray-700">
            {serviceItems.map((item, index) => (
              <div key={index} className="px-4 sm:px-6 py-4 sm:py-5 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-center">
                <dt className="font-bold text-[#00E6A7] text-lg">{item.label}</dt>
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
