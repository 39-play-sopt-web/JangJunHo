const Cell = ({ value, onClick }) => {
  return <td onClick={() => onClick(value)}>{value}</td>;
};

export default Cell;