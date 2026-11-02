import styled from "styled-components";

// 페이지 전체 영역
export const Wrapper = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
`;

// 별점 필터 리스트
export const FilterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

// 별점 필터 버튼
export const FilterButton = styled.button`
  padding: 6px 14px;
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.buttonText};
  cursor: pointer;

  /* 선택된 버튼 */
  &[aria-pressed="true"] {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
  }
`;

// 반응형 그리드
export const MovieGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 24px;
`;