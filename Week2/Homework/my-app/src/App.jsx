import { useGame } from "./hooks/Game";
import Level from "./components/Level";
import Time from "./components/Time";
import Target from "./components/Target";
import Board from "./components/Board";

const App = () => {
  const { level, max, boardState, target, count, clickCell, changeLevel } =
    useGame();

  return (
    <div>
      <Level level={level} onChange={changeLevel} />
      <Time count={count} />
      <Target target={target} max={max} />
      <Board boardState={boardState} onCellClick={clickCell} />
    </div>
  );
};

export default App;