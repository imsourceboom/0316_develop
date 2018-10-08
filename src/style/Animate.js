import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

export const fadeInUp = keyframes`
    0% {
        transform: translateY(3rem);
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

export const fadeInDown = keyframes`
    0% {
        transform: translateY(-3rem);
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

export const fadeInRight = keyframes`
    0% {
        transform: translateX(3rem);
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

export const fadeInLeft = keyframes`
    0% {
        transform: translateX(-3rem);
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;


