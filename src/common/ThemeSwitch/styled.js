import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: flex-end;
`;

export const Button = styled.button`
cursor: pointer;
border:none;
display: flex;
align-items: center;
color: inherit;
outline-offset: 8px;
background: none;
`;

export const Text = styled.span`
`;

export const Box = styled.span`
display: flex;
width: 48px;
    background: ${({ theme }) => theme.colors.themeSwitch.background};
    border: 1px solid;
    padding: 2px;
    border-radius: 12px;
`;

export const IconWrapper = styled.span`

`;

export const Icon = styled.img`
`;