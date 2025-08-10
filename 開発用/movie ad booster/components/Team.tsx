
import React from 'react';

const teamMembers = [
  {
    role: "ディレクション担当",
    title: "10億円規模のROI改善に取り組むマーケター",
    description: "CVR改善の豊富な知見を基に、データに基づいた「売れる」広告訴求の企画設計を担当します。",
    image: "./direction.png"
  },
  {
    role: "クリエイティブ担当",
    title: "YouTube登録者15万人超のプロクリエイター",
    description: "200万回再生を超える動画を制作してきた経験を活かし、ユーザーの目を引く高品質な動画を制作します。",
    image: "./creative.png"
  }
];

const Team: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0D0D2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            運用体制
          </h2>
          <p className="mt-4 text-lg text-gray-400">動画広告のプロによってweb集客にレバレッジをかけます。</p>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-16 bg-gradient-to-r from-[#00E6A7] to-[#00B4D8] rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#111133] rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center shadow-xl shadow-[#00E6A7]/30 border-2 border-[#00E6A7]/60 hover:border-[#00E6A7] transition-all duration-300 hover:shadow-[#00E6A7]/50 hover:shadow-2xl hover:-translate-y-1">
              <img src={member.image} alt={member.role} className="w-32 h-32 rounded-full mb-6 border-4 border-[#00E6A7]" />
              <span className="text-sm font-bold text-[#00E6A7] uppercase tracking-wider">{member.role}</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-3">{member.title}</h3>
              <p className="text-gray-400 flex-grow">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
