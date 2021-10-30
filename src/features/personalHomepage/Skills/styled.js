import styled from "styled-components";
import { ReactComponent as BulletIcon } from "./bullet.svg";
import { SubHeader } from "./../SubHeader";

export const Section = styled.section`
    padding: 32px;
    margin-top: 72px;
    background: ${({ theme }) => theme.colors.boxBackground};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadiusSmall};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 48px;
        padding: 16px;
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
    padding: 0;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px 32px;
    list-style: none;
    margin-top: 32px;
    @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
        grid-template-columns: repeat(2, 1fr);
    } 
    @media (max-width: ${({ theme }) =>
      theme.breakpoints.tabletVerticalMax}px) {
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
    color: ${({ theme }) => theme.colors.primary};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 6px;
        margin-right: 8px;
}
`;

export const StyledHeader = styled(SubHeader)`
    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            padding-bottom: 12px;
   
    }
`;