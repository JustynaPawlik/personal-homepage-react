import styled from "styled-components";

export const ButtonLink = styled.a`
  padding: 12px 16px;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition: box-shadow 0.3s;
  border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonLink.text};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  
  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.buttonLink.shadow};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;