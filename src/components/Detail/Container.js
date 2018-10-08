import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as Animate from 'style/Animate';
import { KeyboardArrowLeft } from 'styled-icons/material/KeyboardArrowLeft';
import { KeyboardArrowRight } from 'styled-icons/material/KeyboardArrowRight';
import breakpoint from 'styled-components-breakpoint';

import { data } from 'data';

const ArrowLeft = styled(KeyboardArrowLeft)`
	width: 2.5rem;
	opacity: 0.7;
`;

const ArrowRight = styled(KeyboardArrowRight)`
	width: 2rem;
	opacity: 0.7;
`;

const Wrap = styled.div`
	width: 100%;
	min-height: 100vh;
	padding-top: 60px;
	background-color: #fff;
	position: absolute;
	top: 0;
	left: 0;
	overflow: scroll;
	display: flex;
	justify-content: center;
	animation: ${Animate.fadeInLeft} 0.7s;
`;

const TitleWrap = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
	background-color: #fff;
	animation: ${Animate.fadeInDown} 1s;
`;

const Name = styled.div``;
const TitleContainer = styled.div`
	width: 100%;
	max-width: 769px;
	height: 60px;
	margin: 0 auto;
	padding: 0 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	& a {
		background-image: none;
	}
`;

const Title = styled.div``;
const Article = styled.div``;
const Visit = styled.div``;
const Footnote = styled.div``;
const ContentContainer = styled.div`
	width: 100%;
	max-width: 769px;
	padding: 40px 16px;

	& .visit-link {
		background-image: none;
	}

	${breakpoint('tablet')`
		padding: 70px 22px;
	`}

	& ${Title} {
		font-size: 24px;
		color: #666;
		font-weight: 600;
		line-height: 30px;

		${breakpoint('tablet')`
			font-size: 32px;
			line-height: 38px;
		`};
	}

	& ${Article} {
		margin-top: 30px;
		font-size: 14px;
		line-height: 24px;
		color: #777;

		${breakpoint('tablet')`
		margin-top: 40px;
		font-size: 17px;
		line-height: 32px;
		`};
	}

	& ${Visit} {
		margin-top: 40px;
		padding: 5px 10px;
		border-radius: 30px;
		display: inline-block;
		cursor: pointer;
		box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.05);
		transition: all 0.3s;
		&:hover {
			box-shadow: 1px 8px 16px rgba(0, 0, 0, 0.1);
			transform: translateY(-5px);
		}

		${breakpoint('tablet')`
			padding: 10px 20px;
		`}
		& span {
			padding-left: 20px;
			padding-right: 5px;
		}
	}

	& ${Footnote} {
		margin: 10px;
		padding-left: 20px;
		font-size: 0.85rem;
		color: red;
		opacity: 0.8;

		${breakpoint('tablet')`
			padding-left: 30px;
		`}
	}
`;

const Container = ({
	match: {
		params: { id }
	}
}) => {
	const moveURL = () => {
		let result = data.project.filter(content => String(content.id) === id);
		result = result[0].url;
		window.open(result);
	};

	return (
		<Wrap>
			<TitleWrap>
				<TitleContainer>
					<Link to="/0316_develop/portfolio">
						<ArrowLeft />
					</Link>
					<Name>
						{data.project.map(
							content => String(content.id) === id && content.name
						)}
					</Name>
					<div style={{ width: '2.5rem' }} />
				</TitleContainer>
			</TitleWrap>
			<ContentContainer id="parent">
				<Title>
					{data.project.map(
						content => String(content.id) === id && content.title
					)}
				</Title>
				<Article>
					{data.project.map(
						content =>
							String(content.id) === id && content.description
					)}
				</Article>
				<Visit onClick={moveURL}>
					<span>
						{data.project.map(
							content => String(content.id) === id && content.name
						)}
					</span>
					<ArrowRight />
				</Visit>
				<Footnote>
					<small>
						{data.project.map(
							content =>
								String(content.id) === id && content.footnote
						)}
					</small>
				</Footnote>
			</ContentContainer>
		</Wrap>
	);
};

export default Container;
