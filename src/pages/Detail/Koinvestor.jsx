import React from 'react';
import styled from 'styled-components';
import koinvestor_main from 'assets/koinvestor_main.png'
import koinvestor_detail from 'assets/koinvestor_detail.png'

const Title = () => (
	<>
		BlockChain
		<br />
		Information Report
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
		<ul>
			<li>회원가입(SNS 계정 연동)</li>
			<li>블록체인 뉴스, 트위터 등 검색</li>
			<li>한국어 / 영어 서비스 제공</li>
			<li>관리자 페이즈를 통한 회원 및 서비스 관리</li>
			<li>모바일 연동 홈페이지</li>
		</ul>
		<ImageBox>
			<img src={koinvestor_main} alt=""/>
			<img src={koinvestor_detail} alt=""/>
		</ImageBox>
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
