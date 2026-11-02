import { css } from "@emotion/react";
const Target = ({ target, max }) => {
  return (
    <p css={targetStyle}>
      다음숫자 <b>{target}</b> ({target} / {max})
    </p>
  );
};

// 다음 숫자 스타일
const targetStyle = css`
  margin: 40px auto;
  text-align: center;
  color: gray;
  b {
    font-size: 24px;
    color: black;}
  `;
export default Target;