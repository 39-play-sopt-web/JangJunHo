import Level from "./Level";
import Time from "./Time";

const Header = ({ menu, onMenuChange, level, onLevelChange, count }) => {
  return (
    <header>
      <h1>숫자 클릭 게임</h1>

      <nav>
        <button onClick={() => onMenuChange("game")}>게임</button>
        <button onClick={() => onMenuChange("ranking")}>랭킹</button>
      </nav>

      {menu === "game" && (
        <div>
          <Level level={level} onChange={onLevelChange} />
          <Time count={count} />
        </div>
      )}
    </header>
  );
};

export default Header;