import React from 'react';
import styled from 'styled-components';
import busan1st from 'assets/busan1st.png'

const Title = () => (
    <>
        Busan City
		<br />
        Real Estate
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
            <li>회원가입(무료 / 유료회원)</li>
            <li>다음 지도 API를 통한 매물 확인</li>
            <li>사용자 중심의 인터페이스 구축</li>
            <li>관리자 게시판을 통해 매물 등을 업데이트</li>
            <li>모바일 연동 홈페이지</li>
        </ul>
        <ImageBox>
            <img src={busan1st} alt="" />
        </ImageBox>
    </React.Fragment>
);

const title = <Title />;
const content = <Content />;

const Busan1st = {
    lego: {
        title,
        content
    }
};

export default Busan1st;
