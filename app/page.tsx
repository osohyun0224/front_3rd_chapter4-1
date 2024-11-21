import React from 'react';
import MainHeader from './component/MainHeader';
import Footer from './component/Footer';

export default function Services() {
  return (
    <div className="flex flex-col items-center pb-10 bg-white font-pretendard">
      <MainHeader />
      <div className="rounded-2xl mx-10 h-[628px] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <img
          src="https://vacgom-for-hanghae.s3.ap-southeast-2.amazonaws.com/img-intro-services-new.webp"
          alt="서비스 소개 이미지"
          className="w-full h-full object-cover rounded-2xl"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-10 self-stretch px-36 py-15 bg-white my-16">
        <img
          src="https://vacgom-for-hanghae.s3.ap-southeast-2.amazonaws.com/ico-vacgom-small-logo.svg"
          alt="홈페이지 로고"
          width={100}
          height={100}
          loading="lazy"
        />
        <div className="text-gray-900 text-4xl font-bold">
          영유아를 위한 헬스케어 서비스, Vacgom
        </div>
      </div>
      <div className="flex h-[530px] px-36 py-25 items-center gap-20 self-stretch bg-[#F4FAFE]">
        <div className="flex flex-col justify-center gap-7 flex-1">
          <div className="text-black text-2xl font-bold">
            백신
          </div>
          <div className="text-gray-800 text-lg">
            우리 아이의 백신 접종 내역 조회부터 <br />
            맞춤형 백신 추천 및 정보, 접종 인증서까지. <br />
            간단한 인증을 통해 자녀의 백신 접종 내역을 조회하고, <br />
            접종 시기가 다가오면 PUSH 알림을 통해 <br />
            백신 접종 일정을 리마인드해드려요. <br />
            백곰은 백신과 질병에 관한 정확한 정보를 제공해 <br />
            쉽게 백신과 질병 정보를 살펴볼 수 있어요.
          </div>
        </div>
        <div className="flex h-[350px] items-center flex-1">
          <img
            src="https://vacgom-for-hanghae.s3.ap-southeast-2.amazonaws.com/img-vaccine.webp"
            alt="백신 로고"
            width={350}
            height={350}
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex h-[530px] px-36 py-25 items-center gap-20 self-stretch bg-white">
        <div className="flex h-[350px] items-center flex-1">
          <img
            src="https://vacgom-for-hanghae.s3.ap-southeast-2.amazonaws.com/img-maps.webp"
            alt="공동 돌보미"
            width={350}
            height={350}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center gap-7 flex-1">
          <div className="text-black text-2xl font-bold">
            근처 의료기관 조회
          </div>
          <div className="text-gray-800 text-lg">
            내 위치 기반 근처 의료기관을 조회할 수 있어요. <br />
            진료과별, 접종 가능한 백신별 의료기관을 조회하고, <br />
            진료 시간과 위치에 대한 정보를 제공해요. <br />
            번거로운 검색 없이 백곰을 통해 백신 접종이 가능한 <br />
            근처 의료기관을 손쉽게 조회해 보세요.
          </div>
        </div>
      </div>
      <div className="flex h-[530px] px-36 py-25 items-center gap-20 self-stretch bg-gray-50">
        <div className="flex flex-col justify-center gap-7 flex-1">
          <div className="text-black text-2xl font-bold">
            공동 돌보미
          </div>
          <div className="text-gray-800 text-lg">
            초대 코드를 통해 공동 돌보미를 등록할 수 있어요. <br />
            가족과 함께 우리 아이의 건강을 챙길 수 있는 <br />
            공동 돌봄 네트워크에 참여해 보세요.
            <br />
            자녀의 백신 접종 내역을 손쉽게 확인하고, <br />
            백신 접종 일정과 아이의 일정을 공유할 수 있어요.
            <br />
          </div>
        </div>
        <div className="flex h-[350px] items-center flex-1">
          <img
            src="https://vacgom-for-hanghae.s3.ap-southeast-2.amazonaws.com/img-toge.webp"
            alt="공동 돌보미"
            width={350}
            height={350}
          />
        </div>
      </div>
      <div className="flex h-[530px] px-36 py-25 items-center gap-20 self-stretch bg-white">
        <div className="flex h-[350px] items-center flex-1">
          <img
            src="https://vacgom-for-hanghae.s3.ap-southeast-2.amazonaws.com/img-calen.webp"
            alt="공동 돌보미"
            width={350}
            height={350}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center gap-7 flex-1">
          <div className="text-black text-2xl font-bold">
            캘린더
          </div>
          <div className="text-gray-800 text-lg">
            우리 아이의 일정을 꼼꼼하게 관리할 수 있어요. <br />
            백신 접종 일정, 학교 행사 등 중요한 일정을 <br />
            놓치지 않도록 등록하고 공동 돌보미와 함께 공유해보세요.
            <br />
            캘린더에 표시된 일정은 공동 돌보미와 실시간으로 동기화되어 <br />
            바쁜 일상 속에서도 중요한 일정을 놓치지 않도록 도와드려요.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}