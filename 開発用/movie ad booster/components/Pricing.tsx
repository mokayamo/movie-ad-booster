
import React from 'react';
import { CheckIcon } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#111133]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            プランと料金
          </h2>
          <p className="mt-4 text-lg text-gray-400">透明性の高い料金体系で、安心してご利用いただけます。</p>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-16 bg-gradient-to-r from-[#00E6A7] to-[#00B4D8] rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Main Plan */}
          <div className="bg-[#111133] rounded-2xl p-6 sm:p-8 shadow-xl shadow-[#00E6A7]/30 border-2 border-[#00E6A7] hover:border-[#00B4D8] transition-all duration-300 hover:shadow-[#00B4D8]/50 hover:shadow-2xl relative flex flex-col">
            <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white">基本プラン</h3>
                <p className="text-gray-400 mt-2 mb-6">動画制作から改善運用まで全てコミコミ</p>
                
                <div className="my-6">
                    <p className="text-gray-400">広告媒体費</p>
                    <p className="text-3xl font-bold text-white">¥500,000<span className="text-lg font-normal text-gray-400">〜 / 月</span></p>
                </div>

                <div className="my-6">
                    <p className="text-gray-400">運用手数料</p>
                    <p className="text-3xl font-bold text-white">媒体費の20%</p>
                </div>
                
                <div className="bg-green-500/20 text-[#00E6A7] p-4 rounded-lg flex items-center gap-3">
                    <CheckIcon className="w-8 h-8"/>
                    <div>
                        <span className="font-bold text-lg">制作費</span>
                        <p>手数料内に含む</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Options */}
          <div className="bg-[#111133] rounded-2xl p-6 sm:p-8 shadow-xl shadow-gray-500/30 border-2 border-gray-500/60 hover:border-gray-400 transition-all duration-300 hover:shadow-gray-400/50 hover:shadow-2xl flex flex-col">
             <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white">オプション</h3>
                <p className="text-gray-400 mt-2 mb-6">ご要望に応じて柔軟に対応可能です</p>
                
                <ul className="space-y-4 text-lg">
                    <li className="border-b border-gray-700 pb-4">
                        <p className="text-white">人物撮影動画</p>
                        <p className="text-2xl font-bold text-[#00E6A7]">+ ¥100,000<span className="text-sm font-normal text-gray-400"> / 本</span></p>
                    </li>
                    <li className="border-b border-gray-700 pb-4">
                        <p className="text-white">ベース動画追加</p>
                        <p className="text-2xl font-bold text-[#00E6A7]">+ ¥30,000<span className="text-sm font-normal text-gray-400"> / 本</span></p>
                    </li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
