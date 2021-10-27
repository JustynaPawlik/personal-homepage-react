import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  margin-top: 56px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 40px;
  }
`;

export const Item = styled.li`
  margin-right: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 16px;
  }
`;

export const Link = styled.a`
  transition: color 0.3s;
  }
`;

export const styleIcon = Icon => styled(Icon)`
  height: auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 32px;
  }
`; 