import styled from "styled-components";
import { ReactComponent as BulletIcon } from "./bullet.svg";

export const Section = styled.section`
    padding: 32px;
    margin-top: 72px;
    }
`;

export const StyledHeader = styled.h2`
    padding-bottom: 16px;
`;

export const Item = styled.li`
    display: flex;
    line-height: 1.4;
}
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px 32px;
    list-style: none;
    margin-top: 32 px;
    }
`;


export const Bullet = styled(BulletIcon)`
    margin-right: 16px;
    height: auto;
}
`;