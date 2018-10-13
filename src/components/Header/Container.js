import React from 'react';
import styled from 'styled-components';
import * as Animate from 'style/Animate';
import logo from 'assets/logo.png';

const Logo = styled.div``;
const Name = styled.h4``;
const Mind = styled.div``;
const Wrap = styled.header`
	height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	animation: ${Animate.fadeInDown} 0.7s;

	& ${Logo} {
		width: 88px;
		height: 88px;
		border-radius: 44px;
		box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.1);
		background-image: url(${logo});
		background-position: center;
		background-size: 3.3rem auto;
		background-repeat: no-repeat;
		background-color: #fff;
		transition: 0.3s;

		&:hover {
			transform: scale(1.3);
		}
	}

	& ${Name} {
		margin-top: 20px;
		margin-bottom: 5px;
		font-weight: 700;
		font-size: 16px;
	}

	& ${Mind} {
		color: #999;
		font-size: 14px;
	}
`;

const Container = () => (
	<Wrap>
		<Logo />
		<Name>0316 Develop</Name>
		<Mind>Reliance / Relaxed / Remember</Mind>
	</Wrap>
);

export default Container;
