import styled from "styled-components";
import { ReactComponent as EnvelopeIcon } from "./envelope.svg";
import { ButtonLink } from "../ButtonLink";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 64px;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        grid-gap: 32px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 12px; 
    }
`;

export const ThisIs = styled.div`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: initial;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Name = styled.h1`
    font-size: 38px;
    font-weight: 900;
    margin: 12px 0 0 0;
    color: ${({ theme }) => theme.colors.textPrimary};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 22px;
        margin-top: 8px;
}
`;

export const Summary = styled.p`
    font-size: 20px;
    margin: 36px 0 0 0;
    line-height: 1.4;
    max-widht: 650px;
    color: ${({ theme }) => theme.colors.textPrimary};
    @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        margin-top: 16px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
        max-width: 570px;
}
`;

export const StyledButtonLink = styled(ButtonLink)`
    display: inline-flex;
    align-items: center;
    margin-top: 24px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 24px;
}
`;

export const Avatar = styled.img`
    width: 30vw;
    max-width: 384px;
    border-radius: 50%;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 132px;
}
`;

export const ButtonIcon = styled(EnvelopeIcon)`
    margin-right: 16px;
`;