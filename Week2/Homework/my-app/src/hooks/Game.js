import { useState } from "react";
import { useTimer } from "./Timer";
import { SIZES } from "../constants";
import { createBoard, range, pickRandom, saveRecord } from "../functions";

export const useGame = () => {
  const [level, setLevel] = useState(1);
  const size = SIZES[level];
  const max = size * size * 2;

  const [boardState, setBoardState] = useState(() => createBoard(size));
  const [target, setTarget] = useState(1);
  const [leftNumbers, setLeftNumbers] = useState(() =>
    range(size * size + 1, max)
  );
  const [result, setResult] = useState(null); // 모달 구현
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
      saveRecord({ date: new Date().toLocaleString("ko-KR"), level, time });
      setResult(time); // alert 제거 및 모달 구현
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

  const closeResult = () => { // 모달 닫기
    setResult(null);
    startNewGame(size);
  };

  return {
    level,
    max,
    boardState,
    target,
    count: timer.count,
    clickCell,
    changeLevel,
    result, 
    closeResult,
  };
};