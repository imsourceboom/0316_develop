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
				코인베스터는
				<br />
				<br />
				전세계 블록체인 프로젝트팀과 협업을 통하여
				<br />
				<br />
				한국 투자자들에게 유용한 정보를
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
