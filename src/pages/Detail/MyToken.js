import React from 'react';
import styled from 'styled-components'

const Title = () => (
    <>
        CryptoCurrency
		<br />
        PortFolio
	</>
);


const ImageBox = styled.div`
	width: 100%;
	text-align: center;

	& img {
		width: 100%;
		height: auto;
		object-fit: contain;
		border-radius: 10px;
		margin: 0;
	}
`
const Content = () => (
    <React.Fragment>
        출근셔틀 예약서비스 모두의셔틀은 기존에 회사단위로 운영되던 셔틀을,
		지역단위로 인원을 모집함으로써 더 많은 회사의, 더 많은 사람들이
		출근셔틀을 이용할 수 있도록 도와주는 서비스다. 현재 모두의셔틀은 웹 기반
		서비스이며, 모바일 어플리케이션은 기획까지 완료하고 나왔으나, 아직
		출시되지는 않은 것으로 보인다.
		<br/>
		<br/>
		암호화폐 개인 포트폴리오 서비스 MyToken은
		BitClubNetWork의 ICO 투자자들을 위해 제작된 서비스입니다.
		<br />
        <br />
        ICO를 통해 투자한 코인들은 한국 거래소에 상장이 되기전까지는 
		<br />
        <br />
        완전 초기 스타트업이다 보니 디자인 총괄이라고는 하지만 디자인 외적인
		운영과 CS업무 및 퍼블리싱까지 도맡아 하게되어, 아무래도 디자인 퀄리티나
		완성도에 있어서 남는 아쉬움이 크다.
		<br />
        <br />
        <ImageBox>
            <img src="https://mopsyshin.github.io/images/modoo-screen.png" alt="" />
        </ImageBox>
        <br />
        <br />위 스크린샷은 그만두고 나오던 시점의 모두의셔틀 메인화면인데, 얼마
		전 접속해보니 아무래도 디자인 퀄리티 컨트롤에 실패한 것 같다(...)
		메인화면의 커버 사진은 제발 고해상도로 쓰도록 하자. 2017년엔 더 흥할수
		있기를 빈다.
	</React.Fragment>
);

const title = <Title />;
const content = <Content />;

const MyToken = {
    lego: {
        title,
        content
    }
};

export default MyToken;
