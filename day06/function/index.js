// 일반 함수 f(X) - Function

// 함수 정의
function iceCream(x) {
  console.log(`${x}맛 아이스크림 꿀맛`);
}

iceCream("딸기");
iceCream("녹차");
iceCream("초코");

// quiz 1번
function num(x) {
  console.log(x % 2 ? "홀수" : "짝수");
}

num(5);
num(2);
num(3);

// return
function makeDouble(x) {
  return x * 2;
}

const a = makeDouble(10);
console.log(a);

// 2번
function hi(x) {
  return console.log(`안녕하세요 ${x || "Guest"} 님!`);
}

hi();

// 3번
function operator(x, y) {
  return `sum : ${x + y} minus : ${x - y} multiply : ${x * y} square : ${
    x ** y
  }`;
}

operator(2, 3);

const sum = (x, y) => {
  return x + y;
};

const minus = (x, y) => {
  return x - y;
};

const multiply = (x, y) => {
  return x * y;
};

const square = (x, y) => {
  return x ** y;
};

// 구구단 프로그램
// for (i = 2; i < 10; i++) {
//   console.log(`${i}단`);
//   for (j = 1; j < 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }
