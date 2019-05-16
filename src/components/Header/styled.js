import styled from 'styled-components';
import * as Animate from 'style/Animate';
import logo from 'assets/logo.png';

export const Wrap = styled.header `
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${Animate.fadeInDown} 0.7s;
`;

export const Logo = styled.div `
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
`;

export const Name = styled.h4 `
    margin-top: 20px;
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 16px;
`;

export const Mind = styled.div `
    color: #999;
    font-size: 14px;
`;