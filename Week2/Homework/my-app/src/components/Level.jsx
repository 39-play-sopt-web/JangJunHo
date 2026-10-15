const Level = ({ level, onChange }) => {
  return (
    <select value={level} onChange={(e) => onChange(Number(e.target.value))}>
      <option value={1}>Level 1 (3x3)</option>
      <option value={2}>Level 2 (4x4)</option>
      <option value={3}>Level 3 (5x5)</option>
    </select>
  );
};

export default Level;