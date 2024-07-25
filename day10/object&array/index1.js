// 기본 타입 : String, Number, Boolean, Undefined, Null
// 참조 타입 : Object -> {}, Array -> [], Math, Date, ...
const book = Object(); // const book = {};

// 배열 안 10칸을 🍕로 채운다(.fill())
const pizza = Array(10).fill("🍕"); // const pizza = [];
const arr = Array(10)
  .fill("")
  .map((x) => !!x); // 빈 문자열을 false로 변환  !: 암묵적 타입 변환(true or false)
const num = Array(1001)
  .fill(0)
  .map((x, i) => i); // x는 value i는 번지수를 가리킴
console.log(num);

const arr1 = Array(1001)
  .fill(0)
  .map((x, i) => (i % 2 ? i : "🍕")); // 홀수는 그대로, 짝수는 🍕
console.log(arr1);

// 3 6 9 -> [1,1000] -> '👏' 아니면 숫자 출력
console.log(
  Array(1001)
    .fill(0)
    .map((v, i) => String(i + 1))
    .map((v) =>
      v.includes("3") || v.includes("6") || v.includes("9") ? "👏" : v
    )
    .map((v) => (v == "👏" ? "👏" : Number(v)))
);
