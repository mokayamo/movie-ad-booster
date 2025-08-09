
import React from 'react';
import { CheckIcon, ProblemIcon } from '../constants';

const problems = [
  "動画広告を出しても反応が悪い",
  "広告動画の制作にコストも手間もかかる",
  "PDCAが回らず、何が悪いのか分からない",
  "どんな動画が“当たる”のか、手探り状態..."
];

const solutions = [
  { title: "冒頭2秒(フック)特化型のPDCA", description: "最も重要な冒頭の訴求を高速でテストし、成果を最大化します。" },
  { title: "ワンストップで全てお任せ", description: "広告運用、動画制作、改善提案まで一気通貫でサポートします。" },
  { title: "効率的な制作設計", description: "ベース動画1本 + フック11本で、低コストかつ多様なテストを実現します。" },
  { title: "高速な改善サイクル", description: "2週間ごとに動画を差し替え、常に最適な広告を配信し続けます。" },
  { title: "制作費込みの明朗会計", description: "追加の制作費は不要。手数料のみで高いコストパフォーマンスを提供します。" }
];

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#111133]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            <span className="text-[#00E6A7]">▷</span> 動画広告で成功できてますか?
          </h2>
          <p className="mt-4 text-lg text-gray-400">一つでも当てはまったら、私たちにご相談ください。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Problems */}
          <div className="bg-[#0D0D2B] p-10 rounded-2xl shadow-2xl">
            <div className="mb-8"></div>
            <ul className="space-y-6">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <ProblemIcon className="h-7 w-7 text-red-400 flex-shrink-0 mr-4 mt-1" />
                  <span className="text-gray-300 text-lg leading-relaxed">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-gradient-to-br from-[#1a2a6c] to-[#0D0D2B] p-10 rounded-2xl shadow-2xl border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-6">動画広告ブースターなら<span className="text-[#00E6A7]">解決できます</span></h3>
            <ul className="space-y-5">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="h-7 w-7 text-[#00E6A7] flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">{solution.title}</h4>
                    <p className="text-gray-400 text-sm">{solution.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
