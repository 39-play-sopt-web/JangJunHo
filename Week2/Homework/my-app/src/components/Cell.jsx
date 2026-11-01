import { css } from "@emotion/react";

const Cell = ({ value, onClick }) => {
  return (
    <td>
      <button css={[cellStyle, value === "" && emptyStyle]} onClick={() => onClick(value)}>
        {value}
      </button>
    </td>
  );
};

// 게임판 스타일
const cellStyle = css`
  width: 100px;
  height: 100px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  background: white;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  
  &:active { // 클릭 시 스타일 
    background: aquamarine;
    transform: scale(0.9);
  }
`;

// 빈 칸 스타일
const emptyStyle = css`
  background: transparent;
  outline: 1px dotted red;
`;
export default Cell;