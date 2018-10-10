import React from 'react';
import styled from 'styled-components';
import * as Ui from 'style/Ui';
import * as Animate from 'style/Animate';

const Card = styled(Ui.Box)`
	animation: ${Animate.fadeInLeft} ${props => `${props.duration}s`};
	& p {
		font-size: 12px;
		line-height: 20px;
		margin: 0;
	}
`;

const About = () => (
	<>
		<Card duration={0.8}>
			<p>
				0316 Develop은
				<br />
				<br />
				가장 현대적인 웹 기술을 지향합니다.
				<br />
				<br />
				사용자 경험
				<br />
				<br />
				신속하고 정확하게 제공합니다.
			</p>
		</Card>
		<Card duration={1.5}>
			<p>
				Koinvestor promptly and accurately delivers
				<br />
				<br />
				the official information of the global blockchain projects,
				<br />
				<br />
				through mutual cooperation, to the Korean investors.
			</p>
		</Card>
	</>
);

export default About;
