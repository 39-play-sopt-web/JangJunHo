import { useEffect, useRef, useState } from "react";

export const useTimer = () => {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(0);
  const intervalRef = useRef(null);

  const start = () => {
    startTimeRef.current = Date.now();
    intervalRef.current = setInterval(() => {
      setCount(Date.now() - startTimeRef.current);
    }, 10);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    const elapsed = Date.now() - startTimeRef.current;
    setCount(elapsed);
    return elapsed;
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setCount(0);
  };

  useEffect(() => () => clearInterval(intervalRef.current), []);

  return { count, start, pause, stop };
};