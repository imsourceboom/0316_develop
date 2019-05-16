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

const About = () => (
    <>
        <Card duration={0.8}>
            <p>
                0316 Company는
                <br />
                <br />
                가장 현대적인 웹 기술을 지향합니다.
                <br />
                <br />
                <br />
                사용자 친화적인 디자인과 경험을 위해
                <br />
                <br />
                지속적인 노력을 합니다.
            </p>
        </Card>
        <Card duration={1.5}>
            <p>
                0316 Company
                <br />
                <br />
                Aiming for the most modern web Technologies.
                <br />
                <br />
                <br />
                User Experience
                <br />
                <br />
                Deliver quickly and Accurately.
            </p>
        </Card>
    </>
);

export default About;
