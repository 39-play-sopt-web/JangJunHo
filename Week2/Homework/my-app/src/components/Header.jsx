import { css } from "@emotion/react";
import Level from "./Level";
import Time from "./Time";

const Header = ({ menu, onMenuChange, level, onLevelChange, count }) => {
  return (
    <header css={headerStyle}>
      <h2>🔢 숫자 클릭 게임</h2>
      <nav css={menuStyle}>
        <button css={[buttonStyle, menu === "game" && activeStyle]} onClick={() => onMenuChange("game")}>
            게임
        </button>
        <button css={[buttonStyle, menu === "ranking" && activeStyle]} onClick={() => onMenuChange("ranking")}>
            랭킹
        </button>
      </nav>

      {menu === "game" && (
        <div css={rightStyle}>
          <Level level={level} onChange={onLevelChange} />
          <Time count={count} />
        </div>
      )}
    </header>
  );
};

// 해더 스타일 
const headerStyle = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 10px 20px;
  background: white;
`;

// 메뉴(게임/랭킹) 스타일
const menuStyle = css`
  text-align: center;
`;

// 버튼 스타일
const buttonStyle = css`
  margin: 0 5px;
  padding: 5px 15px;
  border: none;
  border-radius: 10px;
  background: white;
`;

// 버튼 활성화 스타일
const activeStyle = css`
  background: aquamarine;
`;

// 오른쪽 영역(레벨 선택, 시간) 스타일
const rightStyle = css`
  text-align: right;
`;

export default Header;