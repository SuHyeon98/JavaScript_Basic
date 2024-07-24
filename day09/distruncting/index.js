// 1. ... -> String -> Array
// 같은 코드
const a = "coffee".split("");
const b = [..."coffee"];

// "abCdeFGHijklm" -> 소문자만 있는 배열로 바꿔라
// toLowerCase()
const b0 = [..."abCdeFGHijklm"];
console.log(b.filter((x) => x === x.toLowerCase()));

console.log(
  b.map((x) => (x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()))
);

// 2. ... 배열을 찢다
const fruits = ["tomato", "manogo", "melon", "apple"];

const a0 = fruits;
const [a1, b1] = fruits;
const [a2, ...rest] = fruits;
console.log(rest[2]);
