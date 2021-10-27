import styled from "styled-components";
import { ReactComponent as BulletIcon } from "./bullet.svg";

export const Section = styled.section`
    padding: 32px;
    margin-top: 72px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 48px;
        padding: 16px;
    }
`;

export const StyledHeader = styled.h2`
    padding-bottom: 16px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding-bottom: 12px;
    }
`;

export const Item = styled.li`
    display: flex;
    line-height: 1.4;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        line-height: 1.2;
}
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px 32px;
    list-style: none;
    margin-top: 32 px;
    @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
        grid-template-columns: repeat(2, 1fr);
    } 
    @media (max-width: ${({ theme }) =>
      theme.breakpoints.tabletHorizontalMax}px) {
    font-size: 16px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
        margin-top: 12px;
        font-size: 14px;
    }
`;


export const Bullet = styled(BulletIcon)`
    margin-right: 16px;
    height: auto;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 6px;
        margin-right: 8px;
}
`;