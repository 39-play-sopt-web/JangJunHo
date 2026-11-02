import Cell from "./Cell";
import { css } from "@emotion/react";

const Board = ({ boardState, onCellClick }) => {
  return (
    <table css={boardStyle}>
      <tbody>
        {boardState.map((line, i) => (
          <tr key={i}>
            {line.map((cell) => (
              <Cell key={cell.id} value={cell.value} onClick={onCellClick} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// 테이블 스타일
const boardStyle = css`
  margin: 40px auto;
  border-spacing: 5px;
`
export default Board;