
import React from 'react';
import CtaButton from './CtaButton';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111133]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">動画広告でweb集客を<br/>ブーストさせよう</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          ご相談は無料です。まずはお気軽にお問い合わせください。<br/>
          無理な営業は一切いたしませんのでご安心ください。
        </p>
        <CtaButton variant="orange" size="large">無料で相談する</CtaButton>
      </div>
      <div className="bg-[#0D0D2B] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Movie Ad Booster. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">利用規約</a>
            <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
