import { useState } from "react";
import { loadRecords, clearRecords } from "../functions";

const Ranking = () => {
  const [records, setRecords] = useState(() => loadRecords());

  const handleReset = () => {
    clearRecords();
    setRecords([]);
  };

  // 심화 Level 내림차순 & 시간 오름차순 정렬
  const sortedRecords = [...records].sort(
    (a, b) => b.level - a.level || a.time - b.time
  );

  return (
    <div>
      <div>
        <h2>랭킹</h2>
        <button onClick={handleReset}>초기화</button>
      </div>

      {sortedRecords.length === 0 ? (
        <p>기록이 없습니다.</p>
      ) : (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>순위</th>
              <th>레벨</th>
              <th>플레이 시간</th>
              <th>기록 시각</th>
            </tr>
          </thead>
          <tbody>
            {sortedRecords.map((record, i) => (
              <tr key={record.date}>
                <td>{i + 1}</td>
                <td>Level {record.level}</td>
                <td>{record.time.toFixed(2)}초</td>
                <td>{record.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Ranking;