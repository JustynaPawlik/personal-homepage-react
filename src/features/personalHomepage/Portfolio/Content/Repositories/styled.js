import styled from "styled-components";
import α from 'color-alpha'

export const List = styled.ul`
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    padding: 0;
    grid-gap: 32px;
    @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 24px;
    }
`;

export const Tile = styled.li`
    padding: 56px;
    margin: 0;
    transition: border-color 0.3s;
    background: ${({ theme }) => theme.boxBackground};
    border: 6px solid ${({ theme }) => theme.colors.tile.border};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadiusSmall};
    &:hover {
        border-color: ${({ theme }) => theme.colors.tile.borderHover};
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 20px;
      }
    `;

export const Name = styled.h3`
    font-size: 24px;
    margin: 0;
    color: ${({ theme }) => theme.colors.tile.header};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
`;

export const Description = styled.p`
    margin-top: 24px;
    line-height: 1.4;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 16px;
        font-size: 14px;
`;

export const Links = styled.dl`
    margin-top: 24px;
    margin-bottom: 0;
    display: grid;
    grid-gap: 8px;
    line-height: 1.6;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 16px;
        font-size: 14px;
`;

export const LinksRow = styled.div`
    display: grid;
    grid-template-columns: 4em 1fr;
`;

export const LinksValue = styled.dd`
    margin: 0;
`;

export const Link = styled.a`
    text-decoration: none;
    padding-bottom: 1px;
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 1px solid ${({ theme }) => α(theme.colors.primary, 0.3)};
    &:hover {
        border-color: unset;
`;