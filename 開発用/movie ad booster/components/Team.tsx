
import React from 'react';

const teamMembers = [
  {
    role: "クリエイティブ担当",
    title: "YouTube登録者15万人超のプロクリエイター",
    description: "200万回再生を超える動画を制作してきた経験を活かし、ユーザーの目を引く高品質な動画を制作します。",
    image: "https://picsum.photos/seed/creator/150/150"
  },
  {
    role: "広告運用・企画担当",
    title: "10億円規模のROI改善実績を持つプランナー",
    description: "CVR改善の豊富な知見を基に、データに基づいた「売れる」広告訴求の企画設計を担当します。",
    image: "https://picsum.photos/seed/planner/150/150"
  }
];

const Team: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#111133]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">制作 & 運用のプロが担当します</h2>
          <p className="mt-4 text-lg text-gray-400">各分野の専門家が、あなたのビジネスを成功に導きます。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#0D0D2B] rounded-2xl p-8 text-center flex flex-col items-center shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
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
