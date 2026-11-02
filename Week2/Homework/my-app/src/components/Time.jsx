import { css } from "@emotion/react";
const Time = ({ count }) => {
  return <span css={timeStyle}>{(count / 1000).toFixed(2)}초</span>;
};

// 시간 스타일
const timeStyle = css`
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  background: aquamarine;
  font-weight: bold;
`;

export default Time;