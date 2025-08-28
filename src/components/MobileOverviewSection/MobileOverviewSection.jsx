// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>힐스테이트 도안리버파크 임대</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>대전광역시 유성구 학하동·복용동 일원 (도안 2-2지구)</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>지하 2층 ~ 지상 35층, 공동주택 총 45개동</span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>전용 59·84㎡ 중심 (84A㎡·84B㎡·84C㎡·84D㎡·)</span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>임대세대 912세대 (1·2·3·5단지 합산)</span>
        </li>
      </ul>
    ),
  },
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            도안신도시 생활중심과 학세권을 누리는<br />
            힐스테이트 도안리버파크 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "도안신도시 미래가치, 개발·일자리 호재",
      desc:
        "서남부종합스포츠타운(예정)으로 문화·여가 인프라 확충<br/>대덕연구개발특구 <br/> 대전 현대프리미엄아울렛 인접으로 풍부한 일자리와 생활 편의",
    },
    {
      img: slide2,
      title: "의료·건강 인프라 초근접 프리미엄",
      desc:
        "충남대학교병원, 유성선병원 등 종합병원 인접<br/>전문의료기관·건강검진센터 접근성 우수<br/>믿을 수 있는 의료 네트워크로 안심 생활",
    },
    {
      img: slide3,
      title: "광역 교통망 확충 프리미엄",
      desc:
        "대전 도시철도 2호선(트램, 예정) 개통 예정<br/>KTX·SRT 오송역 연계, 세종·청주 등 광역 접근성 강화<br/>유성IC·현충원IC(예정)으로 전국 어디든 빠른 연결",
    },
    {
      img: slide4,
      title: "교육·생활 인프라 초근접 프리미엄",
      desc:
        "신설 초·중학교(초품아 단지) 예정<br/>복용초 도보권, 유성고·도안고 인접<br/>학세권과 생활권을 동시에",
    },
    {
      img: slide5,
      title: "충청권 최대 5,000세대 브랜드타운",
      desc:
        "전용 84·101㎡ 중심의 실속형 구성<br/>펜트하우스 등 다양한 타입 선택지",
    },
    {
      img: slide6,
      title: "현대건설 힐스테이트 브랜드 가치",
      desc:
        "국내 NO.1 아파트 브랜드 힐스테이트<br/>현대건설 시공, 2027년 순차 입주 예정",
    },
  ];


  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
