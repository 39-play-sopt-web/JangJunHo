import Cell from "./Cell";

const Board = ({ boardState, onCellClick }) => {
  return (
    <table cellPadding="30" cellSpacing="0" border="1">
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

export default Board;