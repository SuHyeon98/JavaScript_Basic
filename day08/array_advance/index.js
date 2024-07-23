const arr = [1, 2, 3, 4, 5];

// map : 새롭게 바꿈
const allOne = arr.map(() => 1); // 모두 1
const restAll = arr.map((x) => x % 2); // 나머지 수

// 1번
const chickOrHam = arr.map((x) => (x % 2 ? "🍔" : "🍗")); // 홀 or 짝

const menu = ["toast", "sandwich", "taco", "pizza", "ramen", "cookie"];

// t로 시작하면 문자의 길이로 바꾸고, 아니면 대문자로 바꾸기
const lengthUpper = menu.map((x) =>
  x.startsWith("t") ? x.length : x.toUpperCase()
);

// 첫 번째 글자와 마지막 글자가 같다면 "🥚" 아니면 대문자
const eggOrUpper = menu.map(
  (x) => (x[0] == x[x.length - 1] ? "🥚" : x.toUpperCase()) // 문자열의 단어를 따로 추출하는 방법은 index 번호를 적는 것
);
console.log(eggOrUpper);

// filter : 걸러주기
const arr1 = [1, 2, 3, 4, 5];

// return 값이 true면 남고 false면 사라짐
const under3 = arr1.filter((x) => x < 3); // 3보다 작은 수
const arrOdd = arr1.filter((x) => x % 2); // 홀수
const arrEven = arr1.filter((x) => x % 2 == 0); // 짝수

// sort
const arr2 = [5, 2, 12, 7, 3, 9];
arr2.sort((x, y) => x - y); // 오름차순 정렬
