// 배열 생성 
export const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

// 배열에서 숫자 하나를 랜덤으로 뽑고 나머지 배열 반환
export const pickRandom = (list) => {
  if (list.length === 0) return ["", []];
  const index = Math.floor(Math.random() * list.length);
  return [list[index], list.filter((_, i) => i !== index)];
};

// 게임판 생성
export const createBoard = (size) => {
  let list = range(1, size * size);
  const board = [];
  for (let row = 0; row < size; row++) {
    const line = [];
    for (let col = 0; col < size; col++) {
      const [value, rest] = pickRandom(list);
      list = rest;
      line.push({ id: row * size + col, value });
    }
    board.push(line);
  }
  return board;
};

// localStorage에서 기록 목록 불러오기
export const loadRecords = () => {
  return JSON.parse(localStorage.getItem("records")) || [];
};

// 기존 기록 뒤에 새 기록으로 localStorage에 저장
export const saveRecord = (record) => {
  const records = loadRecords();
  records.push(record);
  localStorage.setItem("records", JSON.stringify(records));
};