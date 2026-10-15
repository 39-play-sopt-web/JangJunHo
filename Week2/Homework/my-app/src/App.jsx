import { useState } from "react";
import { useGame } from "./hooks/Game";
import Header from "./components/Header";
import Target from "./components/Target";
import Board from "./components/Board";
import Ranking from "./components/Ranking";

const App = () => {
  const [menu, setMenu] = useState("game");
  const { level, max, boardState, target, count, clickCell, changeLevel } =
    useGame();

  return (
    <div>
      <Header
        menu={menu}
        onMenuChange={setMenu}
        level={level}
        onLevelChange={changeLevel}
        count={count}
      />

      {menu === "game" ? (
        <>
          <Target target={target} max={max} />
          <Board boardState={boardState} onCellClick={clickCell} />
        </>
      ) : (
        <Ranking />
      )}
    </div>
  );
};

export default App;