import React from 'react';
import styled from 'styled-components';
import mytoken_admin_login from 'assets/mytoken_admin_login.png';
import mytoken_admin_manage from 'assets/mytoken_admin_manage.png';
import mytoken_user from 'assets/mytoken_user.png';

const Title = () => (
	<>Cryptocurrency
	<br/>
	Asset Management</>
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
			<li>회원의 자산관리 페이지</li>
			<li>주요 거래소 연동 및 실시간 업데이트</li>
			<li>카카오톡 연동을 통한 실시간 문의 기능</li>
			<li>관리자 페이지를 통한 회원 관리</li>
			<li>모바일 연동홈페이지</li>
		</ul>
		<ImageBox>
			<img src={mytoken_admin_login} alt="" />
			<img src={mytoken_admin_manage} alt="" />
			<img src={mytoken_user} alt="" />
		</ImageBox>
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
