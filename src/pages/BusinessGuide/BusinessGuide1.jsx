import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";




const projectData = [
	{ label: '사업명', value: '힐스테이트 도안리버파크 임대' },
	{ label: '사업위치', value: '대전광역시 유성구 학하동·복용동 일원 (도안 2-2지구)' },
	{ label: '대지면적', value: '추후 공지' },
	{ label: '건축면적', value: '추후 공지' },
	{ label: '연면적', value: '추후 공지' },
	{ label: '용적률', value: '추후 공지' },
	{ label: '건축규모', value: '지하 2층 ~ 지상 35층, 공동주택 총 45개동' },
	{ label: '세대수', value: '임대세대 총 912세대(1·2·3·5단지 합산)' },
];

const BusinessGuide1 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		{ title: "분양일정", url: "/BusinessGuide/plan" },
		// { title: "공급안내", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation(); // 현재 경로를 가져옴
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' }); // 모바일 여부 확인

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>

				<Helmet>
				{/* 페이지별 메타: title/description/og/canonical 만 관리 */}
				<title>힐스테이트 도안리버파크 - 사업안내</title>
				<meta
					name="description"
					content="대전 도안신도시 힐스테이트 도안리버파크 사업 개요와 입지를 확인하세요. 1·2·3·5단지 총 5,329세대 규모, 전용 84·101㎡ 중심의 브랜드타운으로 조성되는 핵심 사업정보를 안내합니다."
				/>
				<meta name="robots" content="index,follow" />
				<link rel="canonical" href="https://www.apay.co.kr/BusinessGuide/intro" />

				{/* Open Graph */}
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="힐스테이트 도안리버파크" />
				<meta property="og:title" content="힐스테이트 도안리버파크 - 사업안내" />
				<meta
					property="og:description"
					content="대전 도안신도시 힐스테이트 도안리버파크 사업 개요: 1·2·3·5단지 총 5,329세대, 전용 84·101㎡ 중심의 대규모 브랜드타운 조성."
				/>
				<meta property="og:url" content="https://www.apay.co.kr/BusinessGuide/intro" />
				<meta property="og:image" content="https://www.apay.co.kr/img/og/business.jpg" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />

				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="힐스테이트 도안리버파크 - 사업안내" />
				<meta
					name="twitter:description"
					content="힐스테이트 도안리버파크 사업 개요와 입지 정보: 도안신도시 중심 5,329세대 대단지, 전용 84·101㎡ 중심의 브랜드타운."
				/>
				<meta name="twitter:image" content="https://www.apay.co.kr/img/og/business.jpg" />
				<meta name="twitter:url" content="https://www.apay.co.kr/BusinessGuide/intro" />

				{/* JSON-LD (대표 이미지/브레드크럼 포함) */}
				<script type="application/ld+json">
					{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "WebPage",
					"name": "힐스테이트 도안리버파크 - 사업안내",
					"url": "https://www.apay.co.kr/BusinessGuide/intro",
					"description":
						"대전 도안신도시 힐스테이트 도안리버파크 사업 개요와 입지 정보. 총 5,329세대, 전용 84·101㎡ 중심의 대규모 브랜드타운.",
					"primaryImageOfPage": {
						"@type": "ImageObject",
						"contentUrl": "https://www.apay.co.kr/img/og/business.jpg",
						"width": 1200,
						"height": 630
					},
					"breadcrumb": {
						"@type": "BreadcrumbList",
						"itemListElement": [
						{ "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.apay.co.kr/" },
						{ "@type": "ListItem", "position": 2, "name": "사업안내", "item": "https://www.apay.co.kr/BusinessGuide/intro" }
						]
					}
					})}
				</script>
				</Helmet>



			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="사업개요" />

			<MenuBar contents={menuContents} />
			{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
			<h1 className={styles.screenReaderOnly}>힐스테이트 도안리버파크 - 사업안내</h1>
			<p className={styles.screenReaderOnly}>
				힐스테이트 도안리버파크은 혁신적인 주거 환경을 제공하는 새로운 아파트 단지입니다. 이 페이지에서는 프로젝트의 전체적인 개요와 개발 계획을 상세히 소개합니다. 사업의 목적, 주요 설계 및 특징, 그리고 주변 환경을 포함한 다양한 정보를 통해 입주자들에게 더 나은 선택을 할 수 있도록 돕습니다.
			</p>

			<div className={styles.textBox}>
				<div>특별한 라이프 컬렉션</div>
				<div>힐스테이트 도안리버파크의 새로운 자부심으로 찾아옵니다.</div>
			</div>

			<img className={styles.img3} src={page1} alt="힐스테이트 도안리버파크-image1"/>

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
