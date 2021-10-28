import styled from "styled-components";


export const List = styled.ul`
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    padding: 0;
    grid-gap: 32px;
    }
`;

export const Tile = styled.li`
    padding: 56px;
    margin: 0;
    transition: border-color 0.3s;
`;

export const Name = styled.h3`
    font-size: 24px;
    margin: 0;
`;

export const Description = styled.p`
    margin-top: 24px;
    line-height: 1.4;
`;

export const Links = styled.dl`
    margin-top: 24px;
    margin-bottom: 0;
    display: grid;
    grid-gap: 8px;
    line-height: 1.6;
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
`;