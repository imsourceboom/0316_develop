import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const Box = styled.div`
    padding: 20px 18px;
    border-radius: 10px;
    border-bottom: 0.5px solid #f8f8f8;
    margin: 10px 0px;
    font-size: 14px;
    font-weight: 200;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.5s;
    color: #666;

    &:hover {
        box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.05);
        transform: translateY(-4px);
        background-color: #f8f8f8;
        color: #000;
    }

    ${breakpoint('tablet')`
        padding: 20px 22px;
    `};
`