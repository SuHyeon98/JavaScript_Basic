import { getRandomInt } from "./math.js";

// 유저에게 로또 번호 6개 로또 번호 1 ~ 45번
// 0, 1, 2, 3개 꽝, 4개 3등, 5개 2등, 6개 1등

const num = [...prompt("로또 번호").split(" ")].map((v) => Number(v));
console.log(num);

const lotto = Array(6)
  .fill()
  .map(() => getRandomInt(1, 46));

console.log(lotto);

const not = num.filter((x) => lotto.some((v) => v == x));
console.log(not);

const prize = {
  6: "1등",
  5: "2등",
  4: "3등",
};

console.log(`${prize[not.length] || "꽝"} 입니다`);
