import { useState } from "react";
import { useGame } from "./hooks/Game";
import { Global, css } from "@emotion/react";
import Header from "./components/Header";
import Target from "./components/Target";
import Board from "./components/Board";
import Ranking from "./components/Ranking";
import Modal from "./components/Modal";

const App = () => {
  const [menu, setMenu] = useState("game");
  const { level, max, boardState, target, count, clickCell, changeLevel, result, closeResult } =
    useGame();

  return (
    <div>
      <Global styles={globalStyle} />
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
          {result !== null && <Modal time={result} onClose={closeResult} level={level} />} 
        </>
      ) : (
        <Ranking />
      )}
    </div>
  );
};

// 배경화면 스타일
const globalStyle = css`
  body {
    margin: 0;
    min-height: 100vh;
    background: linear-gradient(lightblue, aquamarine);
  }
`;

export default App;