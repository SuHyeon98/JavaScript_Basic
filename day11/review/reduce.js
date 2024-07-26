// reduce : 누적시키다

// accumlation : 누적된 값
// current : 원래 값
// 0 : 스타트 값
[1, 2, 3, 4].reduce((acc, cur) => {
  console.log({ acc, cur });
  return acc + cur;
}, 0);

console.log(
  Array(100)
    .fill(0)
    .map((v, i) => i + 1)
    .reduce((acc, cur) => acc + cur, 0)
);
