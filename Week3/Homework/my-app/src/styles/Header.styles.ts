import { Link } from "react-router";
import styled from "styled-components";

export const Wrapper = styled.header`
  padding: 20px 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Logo = styled(Link)`
  font-size: 20px;
  font-weight: bold;
`;

export const Sopt = styled.span`
  color: ${({ theme }) => theme.colors.sopt};
`;

export const Movie = styled.span`
  color: ${({ theme }) => theme.colors.movie};
`;
