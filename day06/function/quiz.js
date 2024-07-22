// //1번
// const ticket = (x) => {
//   x = prompt("무슨 영화?");
//   if (x == "범죄도시") {
//     return 10000;
//   } else if (x == "인사이드아웃") {
//     return 11000;
//   } else if (x == "핸섬가이즈") {
//     return 12000;
//   } else {
//     return "오류";
//   }
// };
// console.log(ticket());

const buyTicket = () => {
  const movie = prompt("영화를 고르세요");
  const price = {
    범죄도시: 10000,
    인사이드아웃: 11000,
    핸섬가이즈: 12000,
  };
  return price[movie];
};
console.log(buyTicket());

// // 2번
const bigger = (x, y) => {
  return x > y ? x : y;
};
console.log(bigger(2, 3));

// // 3번
const word = () => {
  const x = prompt("문자입력");
  return x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase();
};
console.log(word());

// 4번
const length = (num) => {
  const str = prompt("단어");
  return str.slice(0, num);
};
console.log(length(3));

// const leng = () => {
//   const str = prompt("단어");
//   const num = Number(prompt("숫자"));
//   return str.slice(0, num);
// };
// console.log(leng());

// 5번
const arr = (x, y, z) => {
  return [x, y, z];
};

console.log(arr(1, 2, 3));
