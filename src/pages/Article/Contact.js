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

const Contact = () => (
	<Card duration={1}>
		<p>
			E-mail :<br /> 0316develop@gmail.com
			<br />
			<br />
			Tell :<br /> 042 536 0316
			<br />
			<br />
			Facebook :<br /> https://www.facebook.com/0316develop
			<br />
			<br />
			Telegram :<br /> @0316develop
		</p>
	</Card>
);

export default Contact;
