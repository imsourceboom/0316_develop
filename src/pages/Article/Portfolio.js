import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint'
import { KeyboardArrowRight } from 'styled-icons/material/KeyboardArrowRight';
import * as Animate from 'style/Animate';
import * as Ui from 'style/Ui';

import { data } from 'data';

const Wrap = styled.div``;
const Title = styled.span`
	font-size: 14px;
	${breakpoint('tablet')`
        font-size: 15px;
    `}; 
    & small {
		opacity: 0.75;
	}
`;
const Arrow = styled(KeyboardArrowRight)`
	width: 2rem;
	height: 2rem;
`;
const CardBox = styled(Ui.Box)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	margin-top: 0.7rem;
	cursor: pointer;
	&:first-child {
		margin-top: 0;
	}
	animation: ${Animate.fadeInLeft} ${props => `${props.duration}s`};
`;

const Card = ({ id, title, summary, duration }) => (
	<Link to={`/portfolio/${id}/`}>
		<CardBox duration={duration}>
			<Title>
				{title}
				<br />
				<small>{summary}</small>
			</Title>
			<Arrow />
		</CardBox>
	</Link>
);

class Portfolio extends React.Component {
	render() {
		return (
			<Wrap>
				{data.project.map(card => (
					<Card
						id={card.id}
						key={card.id}
						title={card.name}
						summary={card.summary}
						duration={card.duration}
					/>
				))}
			</Wrap>
		);
	}
}

export default Portfolio;
