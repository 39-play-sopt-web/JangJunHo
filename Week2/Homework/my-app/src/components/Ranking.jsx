import { useState } from "react";
import { loadRecords, clearRecords } from "../functions";
import { css } from "@emotion/react";

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
    <div css={rankingStyle}>
      <div css={headerStyle}>
        <h2>🏆 랭킹</h2>
        <button css={resetStyle} onClick={handleReset}>
          초기화
        </button>
      </div>

      {sortedRecords.length === 0 ? (
        <p>기록이 없습니다.</p>
      ) : (
        <table css={tableStyle}>
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

// 랭킹 스타일
const rankingStyle = css`
  width: 600px;
  margin: 40px auto;
`;

// 헤더 스타일
const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 초기화 버튼 스타일
const resetStyle = css`
  padding: 5px 10px;
  border: 1px solid red;
  border-radius: 5px;
  background: transparent; // 투명한 배경색
  color: red;
`;

// 테이블 스타일
const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
  background: white;

  th,td {
    padding: 10px;
    text-align: left;
  }

  th {
    background: aquamarine;
  }
`;

export default Ranking;