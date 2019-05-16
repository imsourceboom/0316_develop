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

        @media (min-width: 1024px) {
            & {
                font-size: 14px;
            }
        }
    }
`;

const Contact = () => (
    <Card duration={1}>
        <p>
            E-mail :<br /> 0316company@gmail.com
            <br />
            <br />
            Tell :<br /> 042 536 0316
            <br />
            <br />
            Facebook :<br /> https://www.facebook.com/0316company
            <br />
            <br />
            Telegram :<br /> @0316company
        </p>
    </Card>
);

export default Contact;
