import React from 'react';
import styled from 'styled-components';

const Title = () => (
	<>
		BlockChain Tech Report
		<br />
		for KOREAN
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
`;
const Content = () => (
	<React.Fragment>
		제3세대 커뮤니티 플랫폼을 표방하는 'redot'의 웹버전 프로토타입이다. 개발
		시 참고목적으로 주요 페이지들의 레이아웃과 액션, 트랜지션을 구현하였다.
		<br />
		<br />
		redot은 채널 기반의 커뮤니티 플랫폼으로써, 기존의 각 커뮤니티들이
		폐쇄적인 성격으로 인하여 온라인상의 많은 커뮤니케이션 문제를 일으키는
		것을 해결하고자 하였다. 또한 제로보드나 그누보드 등의 게시판으로 구현된
		여타 커뮤니티에서 발생하는 추천 조작이나 운영 과부하, 그리고
		단순노출방식의 배너광고 등의 문제점들을 기술적으로 보완하여
		비즈니스적으로도 더욱 효율적인 모델을 구성하고자 하였다.
		<br />
		<br />
		아직 서비스가 런칭되지는 않았으며, 내년(2018년) 상반기 중에 런칭될
		것으로 보인다.
		<br />
		(Desktop Only)
		<br />
		<br />
		<ImageBox>
			<img
                src="https://mopsyshin.github.io/images/redot.png"
				alt=""
			/>
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

const Koinvestor = {
	lego: {
		title,
		content
	}
};

export default Koinvestor;
