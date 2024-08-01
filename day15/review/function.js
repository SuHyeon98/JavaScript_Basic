export const makeSeats = () =>
  Array(6 * 16)
    .fill()
    .map((_, i) => ({
      col: makeColumn(i),
      row: makeRow(i),
      state: makeState(i),
    }));

const makeColumn = (x) => [..."ABCDEF"][x % 6]; // col 값을 알려주는 변수
const makeRow = (x) => parseInt(x / 6) + 1; // row 값을 알려주는 변수
const makeState = (i) => {
  const x = parseInt(i / 6); // row값을 알려주는 변수
  const stateMap = {
    red: [0, 14, 15, 16],
    blue: [1, 2, 3, 4],
    yellowGreen: [5, 6, 7, 8, 9, 10, 11, 12, 13],
  };
  const color = Object.keys(stateMap).find((v) => stateMap[v].includes(x)); // stateMap의 key값의 value가 x와 일치하는가
  return color;
};
