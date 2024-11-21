import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 flex flex-col justify-center items-center gap-6 py-16">
      <div className="flex justify-center items-center">
        <img
          src="https://vacgom-for-hanghae.s3.ap-southeast-2.amazonaws.com/ico-vacgom-logo.svg"
          alt="홈페이지 로고"
          width={84}
          height={24}
          loading="lazy"
        />
      </div>
      <nav className="flex gap-4">
        <div className="flex justify-center items-center text-gray-500 font-pretendard font-semibold text-lg">
          홈
        </div>
        <div className="flex justify-center items-center text-gray-500 font-pretendard font-semibold text-lg">
          서비스 소개
        </div>
        <div className="flex justify-center items-center text-gray-500 font-pretendard font-semibold text-lg">
          블로그
        </div>
        <div className="flex justify-center items-center text-gray-500 font-pretendard font-semibold text-lg">
          팀 소개
        </div>
        <div className="flex justify-center items-center text-gray-500 font-pretendard font-semibold text-lg">
          팀원 모집
        </div>
      </nav>
    </footer>
  );
};

export default Footer;