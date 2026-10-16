import { css } from "@emotion/react";

const Cell = ({ value, onClick }) => {
  return <td css={cellStyle} onClick={() => onClick(value)}>
    {value}
  </td>;
};

// 게임판 스타일
const cellStyle = css`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background: white;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;
export default Cell;