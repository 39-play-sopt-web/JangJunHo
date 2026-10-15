import { useState } from "react";
import { useTimer } from "./Timer";
import { SIZES } from "../constants";
import { createBoard, range, pickRandom } from "../functions";

export const useGame = () => {
  const [level, setLevel] = useState(1);
  const size = SIZES[level];
  const max = size * size * 2;

  const [boardState, setBoardState] = useState(() => createBoard(size));
  const [target, setTarget] = useState(1);
  const [leftNumbers, setLeftNumbers] = useState(() =>
    range(size * size + 1, max)
  );
  const timer = useTimer();

  const startNewGame = (newSize) => {
    timer.stop();
    setBoardState(createBoard(newSize));
    setTarget(1);
    setLeftNumbers(range(newSize * newSize + 1, newSize * newSize * 2));
  };

  const changeLevel = (newLevel) => {
    setLevel(newLevel);
    startNewGame(SIZES[newLevel]);
  };

  const clickCell = (value) => {
    if (value !== target) return;

    if (target === 1) {
      timer.start();
    }

    if (target === max) {
      const time = timer.pause() / 1000;
      alert(`게임 종료! 걸린 시간: ${time.toFixed(2)}초`);
      startNewGame(size);
      return;
    }

    const [nextNumber, nextLeftNumbers] = pickRandom(leftNumbers);
    setTarget(target + 1);
    setLeftNumbers(nextLeftNumbers);
    setBoardState(
      boardState.map((line) =>
        line.map((cell) =>
          cell.value === target ? { id: cell.id, value: nextNumber } : cell
        )
      )
    );
  };

  return {
    level,
    max,
    boardState,
    target,
    count: timer.count,
    clickCell,
    changeLevel,
  };
};