import { css } from "@emotion/react";

const Level = ({ level, onChange }) => {
  return (
    <select css={levelStyle} value={level} onChange={(e) => onChange(Number(e.target.value))}>
      <option value={1}>Level 1 (3x3)</option>
      <option value={2}>Level 2 (4x4)</option>
      <option value={3}>Level 3 (5x5)</option>
    </select>
  );
};

// 레벨 선택 스타일
const levelStyle = css`
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 5px;
`;

export default Level;