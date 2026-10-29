import styled from "styled-components";

// 카드 상자 (호버효과)
export const Card = styled.li`
  position: relative;
  overflow: hidden;
  height: 450px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.card};
  transition: transform 0.2s;

  /* hover 효과 */
  &:hover {
    transform: translateY(-5px);
  }
`;

// 포스터 왼쪽 위 별점 배지
export const Rating = styled.p`
  position: absolute;
  top: 8px;
  left: 8px;
  margin: 0;
  padding: 2px 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  font-weight: bold;
`;

// 포스터 (2:3 비율로 맞춤)
export const Poster = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
`;

// 포스터 아래 글자 영역
export const Info = styled.div`
  padding: 12px;
`;

export const Title = styled.h3`
  margin: 0 0 4px;
  font-size: 16px;
`;

export const ReleaseDate = styled.p`
  margin: 0 0 8px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.date};
`;

// 줄거리
export const Overview = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.subText};
`;