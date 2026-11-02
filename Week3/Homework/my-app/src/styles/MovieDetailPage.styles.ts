import { Link } from "react-router";
import styled from "styled-components";

// 페이지 전체 영역 (가운데 정렬)
export const Wrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
`;

// 목록으로 돌아가기 링크
export const BackLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

// 상단 배경 이미지
export const Backdrop = styled.img`
  display: block;
  width: 100%;
  height: 400px;
  margin: 20px 0;
  border-radius: 8px;
  object-fit: cover;
`;

// 포스터 + 주요 정보 (좁은 화면에서는 위아래로 쌓임)
export const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

export const Poster = styled.img`
  width: 220px;
  border-radius: 8px;
`;

export const Title = styled.h2`
  margin-top: 0;
  font-size: 32px;
`;

// 줄거리, 기본 정보 소제목
export const SubTitle = styled.h3`
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.primary};
`;