import styled from "styled-components";

export const ButtonLink = styled.a`
  padding: 12px 16px;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition: box-shadow 0.3s;
  border: 1px solid;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonLink.text};
  }
  `;