import React from 'react';

const reasons = [
  {
    title: "広告を出してもクリック率が低い",
    description: "業界平均CTRは0.4%と低迷。動画広告の場合、94%の視聴者がすぐスキップ",
    icon: "⚠️"
  },
  {
    title: "LP以前に動画で離脱されている",
    description: "最初の2秒で視聴継続か離脱かが決まる。冒頭の課題を解決していない",
    icon: "⚠️"
  },
  {
    title: "動画制作にコストも工数もかかる",
    description: "1本あたり数十万円の制作費がかかり、PDCAが回せない状況に",
    icon: "⚠️"
  },
  {
    title: "クリエイティブが感覚と属人性に依存",
    description: "担当者の経験や感覚に左右され、科学的な検証ができていない",
    icon: "⚠️"
  },
  {
    title: "代理店任せで何を改善すればいいか見えない",
    description: "複雑なレポートや専門用語が多く、改善の糸口が見つけられない状況",
    icon: "⚠️"
  }
];

const WhyVideoAdsFail: React.FC = () => {
  return (
    <>
      {/* 課題セクション */}
      <section className="py-16 sm:py-20 bg-[#111133]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              動画広告がうまくいかない理由
            </h2>
            <p className="mt-4 text-lg text-gray-400">多くの企業が陥りがちな動画広告の落とし穴</p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-[#111133] rounded-2xl p-6 sm:p-8 shadow-xl shadow-red-500/30 border-2 border-red-400/60 hover:border-red-300 transition-all duration-300 hover:shadow-red-400/50 hover:shadow-2xl">
              <div className="flex items-start">
                <div className="text-6xl mr-6 flex-shrink-0 text-red-400 drop-shadow-lg">{reason.icon}</div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{reason.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-base">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 統計情報の強調表示 */}
        <div className="mt-8 sm:mt-12">
          <div className="bg-[#111133] rounded-2xl p-6 sm:p-8 shadow-xl shadow-red-500/30 border-2 border-red-400/60 hover:border-red-300 transition-all duration-300 hover:shadow-red-400/50 hover:shadow-2xl">
            <h3 className="text-center text-xl sm:text-2xl font-bold text-white mb-6">動画広告の離脱率データ</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* グラフ画像 */}
              <div className="flex justify-center">
                <img 
                  src="./graf.png" 
                  alt="動画広告の離脱率グラフ" 
                  className="w-full max-w-lg h-auto rounded-lg"
                />
              </div>
              {/* 統計データ */}
              <div className="text-center md:text-left md:pl-8">
                <div className="space-y-3">
                  <div>
                    <p className="text-xl text-white font-semibold">・最初の10秒以内で視聴者の20%が離脱</p>
                  </div>
                  <div>
                    <p className="text-xl text-white font-semibold">・業界平均視聴率は10～15%が標準値</p>
                  </div>
                  <div>
                    <p className="text-xl text-white font-semibold">・CVR向上には<span className="text-[#00E6A7] font-bold">冒頭2秒の改善</span>が必須</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              出典: Crevo調査・Vidweb・Lany（2024-2025）
            </p>
          </div>
        </div>

        {/* 効果的な改善には科学的アプローチが必要 */}
        <div className="mt-8 sm:mt-12">
          <div className="bg-gradient-to-r from-[#00E6A7]/10 to-[#00B4D8]/10 rounded-xl p-6 sm:p-8 border border-[#00E6A7]/20">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white">
                効果的な改善には、<span className="text-[#00E6A7] font-bold">科学的なデータ分析</span>と<span className="text-[#00E6A7] font-bold">体系的なアプローチ</span>が必要。
              </div>
            </div>
          </div>
        </div>

        {/* なぜ動画広告が見られないのか？ & 従来のアプローチの限界 */}
        <div className="mt-8 sm:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* なぜ動画広告が見られないのか？ */}
            <div className="bg-[#111133] rounded-2xl p-6 sm:p-8 shadow-xl shadow-red-500/30 border-2 border-red-400/60 hover:border-red-300 transition-all duration-300 hover:shadow-red-400/50 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 text-center">なぜ動画広告が見られないのか？</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">情報過多</h4>
                  <p className="text-gray-300 text-sm">ユーザーは日々5,000〜10,000の広告に接触</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">注意力散漫</h4>
                  <p className="text-gray-300 text-sm">スマホでの平均集中時間は8秒未満に短縮</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">無関心バイアス</h4>
                  <p className="text-gray-300 text-sm">自分に関係ないと判断したら即座にスキップ</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">スキップ習慣化</h4>
                  <p className="text-gray-300 text-sm">広告=スキップという行動パターンの定着</p>
                </div>
              </div>
            </div>

            {/* 従来のアプローチの限界 */}
            <div className="bg-[#111133] rounded-2xl p-6 sm:p-8 shadow-xl shadow-red-500/30 border-2 border-red-400/60 hover:border-red-300 transition-all duration-300 hover:shadow-red-400/50 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 text-center">従来のアプローチの限界</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">ブランド優先</h4>
                  <p className="text-gray-300 text-sm">冒頭でロゴやブランド紹介に時間を費やす</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">商品説明型</h4>
                  <p className="text-gray-300 text-sm">ユーザーメリットを後回しにした構成</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">一本勝負</h4>
                  <p className="text-gray-300 text-sm">PDCAサイクルを回さない単発制作</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">感覚依存</h4>
                  <p className="text-gray-300 text-sm">データ検証なしのクリエイティブ判断</p>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-gradient-to-r from-[#00E6A7]/10 to-[#00B4D8]/10 rounded-xl p-6 sm:p-8 border border-[#00E6A7]/20">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">
                  <span className="text-[#00E6A7] font-bold">「最初の2秒」でユーザーの興味を掴むフック</span>が、<br className="sm:hidden" />広告効果を最大化する鍵。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 解決方法セクション */}
      <section className="py-16 sm:py-20 bg-[#0D0D2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              フック主義アプローチによる解決
            </h2>
          </div>

        {/* 解決策の3つのアプローチ */}
        <div className="mt-8 sm:mt-12">
          <div className="bg-gradient-to-r from-[#00E6A7]/10 to-[#00B4D8]/10 rounded-2xl p-6 sm:p-8 border border-[#00E6A7]/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-[#111133] rounded-2xl p-6 sm:p-8 shadow-xl shadow-[#00E6A7]/30 border-2 border-[#00E6A7]/60 hover:border-[#00E6A7] transition-all duration-300 hover:shadow-[#00E6A7]/50 hover:shadow-2xl text-center">
                <div className="mb-4">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">冒頭2秒勝負</h4>
                  <div className="h-1 w-12 bg-gradient-to-r from-[#00E6A7] to-[#00B4D8] rounded-full mx-auto"></div>
                </div>
                <p className="text-gray-300 text-base">瞬時の注目を集めるインパクト設計</p>
              </div>
              <div className="bg-[#111133] rounded-2xl p-6 sm:p-8 shadow-xl shadow-[#00E6A7]/30 border-2 border-[#00E6A7]/60 hover:border-[#00E6A7] transition-all duration-300 hover:shadow-[#00E6A7]/50 hover:shadow-2xl text-center">
                <div className="mb-4">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">複数バリエーション</h4>
                  <div className="h-1 w-12 bg-gradient-to-r from-[#00E6A7] to-[#00B4D8] rounded-full mx-auto"></div>
                </div>
                <p className="text-gray-300 text-base">データ検証による継続的改善</p>
              </div>
              <div className="bg-[#111133] rounded-2xl p-6 sm:p-8 shadow-xl shadow-[#00E6A7]/30 border-2 border-[#00E6A7]/60 hover:border-[#00E6A7] transition-all duration-300 hover:shadow-[#00E6A7]/50 hover:shadow-2xl text-center">
                <div className="mb-4">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">ベネフィット先行</h4>
                  <div className="h-1 w-12 bg-gradient-to-r from-[#00E6A7] to-[#00B4D8] rounded-full mx-auto"></div>
                </div>
                <p className="text-gray-300 text-base">ユーザー価値を最初に訴求</p>
              </div>
            </div>
          </div>
        </div>

        {/* 冒頭フックの重要性データ */}
        <div className="mt-8 sm:mt-12">
          <div className="bg-gradient-to-r from-[#00E6A7]/10 to-[#00B4D8]/10 rounded-2xl p-6 sm:p-8 border border-[#00E6A7]/20">
            <h3 className="text-center text-xl sm:text-2xl font-bold text-white mb-6">冒頭フックの重要性</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* グラフ画像 */}
              <div className="flex justify-center">
                <img 
                  src="./graf2.png" 
                  alt="フック型と従来型の視聴継続率比較グラフ" 
                  className="w-full max-w-lg h-auto rounded-lg"
                />
              </div>
              {/* 重要性データ */}
              <div className="text-center md:text-left md:pl-8">
                <div className="space-y-3">
                  <div>
                    <p className="text-xl text-white font-semibold">・最初の2秒が視聴継続の分岐点</p>
                  </div>
                  <div>
                    <p className="text-xl text-white font-semibold">・フック設計でスキップ率を<span className="text-[#00E6A7] font-bold">30%削減</span>可能</p>
                  </div>
                  <div>
                    <p className="text-xl text-white font-semibold">・データ駆動型の継続的最適化が必須</p>
                  </div>
                  <div>
                    <p className="text-xl text-white font-semibold">・効率的な予算で最大のパフォーマンスを実現</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              出典: Think with Google・Vidyard（2023-2024）
            </p>
          </div>
        </div>

          <div className="text-center mt-12 sm:mt-16">
            <div className="relative overflow-hidden bg-gradient-to-br from-[#00E6A7] to-[#00B4D8] rounded-3xl p-2 shadow-2xl shadow-[#00E6A7]/50 hover:shadow-[#00E6A7]/70 transform hover:scale-105 transition-all duration-500">
              <div className="bg-[#0D0D2B] rounded-2xl p-10 sm:p-16 relative z-10">
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-r from-[#00E6A7] to-[#00B4D8] rounded-2xl blur-2xl opacity-40"></div>
                  <div className="relative text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight whitespace-nowrap">
                      これらを実現するのが<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E6A7] to-[#00B4D8] tracking-tight drop-shadow-lg">「動画広告ブースター」</span>です。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyVideoAdsFail;